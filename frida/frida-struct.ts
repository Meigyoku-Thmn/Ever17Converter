export type StructFieldDescription = ({
   name: 'uint8' | 'uint16' | 'uint32' | 'uint64';
   jsType?: number | UInt64;
} | {
   name: 'int8' | 'int16' | 'int32' | 'int64';
   jsType?: number | Int64;
} | {
   name: 'float' | 'double';
   jsType?: number;
} | {
   name: 'pointer';
   jsType?: NativePointerValue;
} | {
   name: 'str' | 'wstr' | 'utf8_str';
   length: number;
   jsType?: string;
});
export type StructField = Struct | StructFieldDescription;
export type Struct = {
   [field: string]: StructField;
};
export const pointer: StructFieldDescription = { name: 'pointer' };
export const uint64: StructFieldDescription = { name: 'uint64' };
export const int64: StructFieldDescription = { name: 'int64' };
export const uint32: StructFieldDescription = { name: 'uint32' };
export const int32: StructFieldDescription = { name: 'int32' };
export const uint16: StructFieldDescription = { name: 'uint16' };
export const int16: StructFieldDescription = { name: 'int16' };
export const uint8: StructFieldDescription = { name: 'uint8' };
export const int8: StructFieldDescription = { name: 'uint8' };
export const str = (length: number): StructFieldDescription => ({ name: 'str', length });
export const wstr = (length: number): StructFieldDescription => ({ name: 'wstr', length });
export type ResolveStructInst<T extends Struct> = {
   [P in keyof T]: T[P] extends StructFieldDescription
   ? T[P]['jsType']
   : T[P] extends Struct
   ? ResolveStructInst<T[P]>
   : any;
};
export type StructInst<T extends Struct> = ResolveStructInst<T> & { getPtr: () => NativePointer, getSize: () => number };
export type TypeInfo = {
   size: (this: FieldContext) => number;
   get: (this: FieldContext) => any;
   set: (this: FieldContext, value: any) => any;
};
export type FieldContext = { offset: number; ptr: NativePointer; length: number }
export const TypeMap = new Map<StructFieldDescription['name'], TypeInfo>([
   ['uint8', {
      size: () => 1, get() { return this.ptr.add(this.offset).readU8(); },
      set(value: number | UInt64) { return this.ptr.add(this.offset).writeU8(value); }
   }],
   ['int8', {
      size: () => 1, get() { return this.ptr.add(this.offset).readS8(); },
      set(value: number | Int64) { return this.ptr.add(this.offset).writeS8(value); }
   }],
   ['uint16', {
      size: () => 2, get() { return this.ptr.add(this.offset).readU16(); },
      set(value: number | UInt64) { return this.ptr.add(this.offset).writeU16(value); }
   }],
   ['int16', {
      size: () => 2, get() { return this.ptr.add(this.offset).readS16(); },
      set(value: number | Int64) { return this.ptr.add(this.offset).writeS16(value); }
   }],
   ['uint32', {
      size: () => 4, get() { return this.ptr.add(this.offset).readU32(); },
      set(value: number | UInt64) { return this.ptr.add(this.offset).writeU32(value); }
   }],
   ['int32', {
      size: () => 4, get() { return this.ptr.add(this.offset).readS32(); },
      set(value: number | Int64) { return this.ptr.add(this.offset).writeS32(value); }
   }],
   ['uint64', {
      size: () => 8, get() { return this.ptr.add(this.offset).readU64(); },
      set(value: number | UInt64) { return this.ptr.add(this.offset).writeU64(value); }
   }],
   ['int64', {
      size: () => 8, get() { return this.ptr.add(this.offset).readS64(); },
      set(value: number | Int64) { return this.ptr.add(this.offset).writeS64(value); }
   }],
   ['float', {
      size: () => 4, get() { return this.ptr.add(this.offset).readFloat(); },
      set(value: number) { return this.ptr.add(this.offset).writeFloat(value); }
   }],
   ['double', {
      size: () => 8, get() { return this.ptr.add(this.offset).readDouble(); },
      set(value: number) { return this.ptr.add(this.offset).writeDouble(value); }
   }],
   // this can be anything
   ['pointer', {
      size: () => Process.pointerSize, get() { return this.ptr.add(this.offset).readPointer(); },
      set(value: NativePointerValue) { return this.ptr.add(this.offset).writePointer(value); }
   }],
   // fixed-length string
   ['str', {
      size() { return this.length; }, get() { return this.ptr.add(this.offset).readAnsiString(this.length); },
      set(value: string) { return this.ptr.add(this.offset).writeAnsiString(value); }
   }],
   ['utf8_str', {
      size() { return this.length; }, get() { return this.ptr.add(this.offset).readUtf8String(this.length); },
      set(value: string) { return this.ptr.add(this.offset).writeUtf8String(value); }
   }],
   ['wstr', {
      size() { return this.length * 2; }, get() { return this.ptr.add(this.offset).readUtf16String(this.length); },
      set(value: string) { return this.ptr.add(this.offset).writeUtf16String(value); }
   }],
]);
// I assume the runtime is ES2015 complaint – it preserves the order of properties in object
export function createCStruct<T extends Struct>(protoObj: T): StructInst<T> {
   let structSize = 0;
   const structWrapper = (function translate<T extends Struct>(obj: T) {
      const rs = {};
      Object.entries(obj).forEach(([field, value]) => {
         const typeInfo = TypeMap.get((value as StructFieldDescription).name);
         if (typeInfo == null) {
            if (value instanceof Object) {
               rs[field] = translate(value as Struct);
               return;
            }
            throw new Error(`Unknown struct's field type: [${field}: "${value}"]`);
         }
         const fieldContext: FieldContext = {
            offset: structSize,
            get ptr() { return structPtr; },
            length: value.name === 'str' || value.name === 'wstr' ? value.length : 0,
         };
         Object.defineProperty(rs, field, {
            enumerable: true,
            get: typeInfo.get.bind(fieldContext),
            set: typeInfo.set.bind(fieldContext),
         });
         structSize += typeInfo.size.call(fieldContext);
      });
      return rs;
   })(protoObj);
   // eslint-disable-next-line no-var
   var structPtr = Memory.alloc(structSize);
   structWrapper['getPtr'] = () => structPtr;
   structWrapper['getSize'] = () => structSize;
   return structWrapper as any;
}