export type StructFieldDescription = ({
   name: 'uint8' | 'int8' | 'uint16' | 'int16' | 'uint32' | 'int32';
   jsType?: number;
} | {
   name: 'pointer';
   jsType?: NativePointerValue;
});
export type StructField = Struct | StructFieldDescription;
export type Struct = {
   [field: string]: StructField;
};
export const Pointer: StructFieldDescription = { name: 'pointer' };
export const UInt32: StructFieldDescription = { name: 'uint32' };
export const Int32: StructFieldDescription = { name: 'int32' };
export const UInt16: StructFieldDescription = { name: 'uint16' };
export const Int16: StructFieldDescription = { name: 'int16' };
export const UInt8: StructFieldDescription = { name: 'uint8' };
export const Int8: StructFieldDescription = { name: 'uint8' };
export type ResolveStructInst<T extends Struct> = {
   [P in keyof T]: T[P] extends StructFieldDescription
   ? T[P]['jsType']
   : T[P] extends Struct
   ? ResolveStructInst<T[P]>
   : any;
};
export type StructInst<T extends Struct> = ResolveStructInst<T> & { getPtr: () => NativePointer, getSize: () => number };
export type TypeInfo = { size: number; get: () => any; set: (value) => any; };
export const TypeMap = new Map<StructFieldDescription, TypeInfo>([
   [UInt8, {
      size: 1, get() { return this.ptr.add(this.offset).readU8(); },
      set(value) { return this.ptr.add(this.offset).writeU8(value); }
   }],
   [Int8, {
      size: 1, get() { return this.ptr.add(this.offset).readS8(); },
      set(value) { return this.ptr.add(this.offset).writeS8(value); }
   }],
   [UInt16, {
      size: 2, get() { return this.ptr.add(this.offset).readU16(); },
      set(value) { return this.ptr.add(this.offset).writeU16(value); }
   }],
   [Int16, {
      size: 2, get() { return this.ptr.add(this.offset).readS16(); },
      set(value) { return this.ptr.add(this.offset).writeS16(value); }
   }],
   [UInt32, {
      size: 4, get() { return this.ptr.add(this.offset).readS32(); },
      set(value) { return this.ptr.add(this.offset).writeS32(value); }
   }],
   [Int32, {
      size: 4, get() { return this.ptr.add(this.offset).readS32(); },
      set(value) { return this.ptr.add(this.offset).writeS32(value); }
   }],
   [Pointer, {
      size: 4, get() { return this.ptr.add(this.offset).readPointer(); },
      set(value) { return this.ptr.add(this.offset).writePointer(value); }
   }],
]);
// I assume the runtime is ES2015 complaint – it preserves the order of properties in object
export function createCStruct<T extends Struct>(protoObj: T): StructInst<T> {
   let structSize = 0;
   const structWrapper = (function translate<T extends Struct>(obj: T) {
      const rs = {};
      Object.entries(obj).forEach(([field, value]) => {
         const typeInfo = TypeMap.get(value as StructFieldDescription);
         if (typeInfo == null) {
            if (value instanceof Object) {
               rs[field] = translate(value as Struct);
               return;
            }
            throw new Error(`Unknown struct's field type: [${field}: "${value}"]`);
         }
         Object.defineProperty(rs, field, {
            enumerable: true,
            get: typeInfo.get.bind({ offset: structSize, get ptr() { return structPtr; } }),
            set: typeInfo.set.bind({ offset: structSize, get ptr() { return structPtr; } }),
         });
         structSize += typeInfo.size;
      });
      return rs;
   })(protoObj);
   // eslint-disable-next-line no-var
   var structPtr = Memory.alloc(structSize);
   structWrapper['getPtr'] = () => structPtr;
   structWrapper['getSize'] = () => structSize;
   return structWrapper as any;
}