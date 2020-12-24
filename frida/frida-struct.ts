type SignedNumberField = { name: 'int8' | 'int16' | 'int32' };
type SignedBigNumField = { name: 'int64' };
type UnsignedNumberField = { name: 'uint8' | 'uint16' | 'uint32' };
type UnsignedBigNumField = { name: 'uint64' };
type FloatingPointNumberField = { name: 'float' | 'double' };
type StringField = { name: 'str' | 'wstr' | 'utf8_str', length: number };
type PointerField = { name: 'pointer' };
type BooleanField = { name: 'bool32' | 'bool8' }

type StructScalarField =
   BooleanField | SignedBigNumField | UnsignedBigNumField | SignedNumberField | UnsignedNumberField | FloatingPointNumberField | StringField | PointerField;
type StructField = Struct | StructScalarField;
type Struct = {
   [field: string]: StructField;
};

export const pointer: PointerField = { name: 'pointer' };
export const uint64: UnsignedBigNumField = { name: 'uint64' };
export const int64: SignedBigNumField = { name: 'int64' };
export const uint32: UnsignedNumberField = { name: 'uint32' };
export const int32: SignedNumberField = { name: 'int32' };
export const uint16: UnsignedNumberField = { name: 'uint16' };
export const int16: SignedNumberField = { name: 'int16' };
export const uint8: UnsignedNumberField = { name: 'uint8' };
export const int8: SignedNumberField = { name: 'int8' };
export const bool32: BooleanField = { name: 'bool32' };
export const bool8: BooleanField = { name: 'bool8' };
export const text = (length: number): StringField => ({ name: 'str', length });
export const wtext = (length: number): StringField => ({ name: 'wstr', length });

type StructInstanceData<T extends Struct> = {
   [Field in keyof T]: T[Field] extends SignedNumberField
   ? number
   : T[Field] extends UnsignedNumberField
   ? number
   : T[Field] extends SignedBigNumField
   ? Int64
   : T[Field] extends UnsignedBigNumField
   ? UInt64
   : T[Field] extends FloatingPointNumberField
   ? number
   : T[Field] extends StringField
   ? string
   : T[Field] extends PointerField
   ? NativePointerValue
   : T[Field] extends BooleanField
   ? boolean
   : T[Field] extends Struct
   ? StructInstance<T[Field]>
   : any;
};
type StructInstance<T extends Struct> = StructInstanceData<T> & {
   getPtr: () => NativePointer,
   getSize: () => number,
};
type TypeInfo = {
   size: (this: FieldContext) => number;
   get: (this: FieldContext) => any;
   set: (this: FieldContext, value: any) => any;
};
type FieldContext = { offset: number; ptr: NativePointer; length: number }
const TypeMap = new Map<StructScalarField['name'], TypeInfo>([
   ['bool32', {
      size: () => 4, get() { return !!this.ptr.add(this.offset).readU32(); },
      set(value: boolean) { return this.ptr.add(this.offset).writeU32(value ? 1 : 0); }
   }],
   ['bool8', {
      size: () => 1, get() { return !!this.ptr.add(this.offset).readU8(); },
      set(value: boolean) { return this.ptr.add(this.offset).writeU8(value ? 1 : 0); }
   }],
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
// I assume the runtime preserves the order of properties in object, almost every Javascript Engines do this since ES2015
export function createCStruct<T extends Struct>(protoObj: T, address: NativePointer = null): StructInstance<T> {
   let structSize = 0;
   let innerStructSize = 0;
   const structWrapper = (function translate<T extends Struct>(obj: T) {
      const rs = {};
      Object.entries(obj).forEach(([field, value]) => {
         const typeInfo = TypeMap.get((value as StructScalarField).name);
         if (typeInfo == null) {
            if (value instanceof Object) {
               innerStructSize = 0;
               const _offset = structSize;
               rs[field] = translate(value as Struct);
               const innerObj = rs[field] as StructInstance<T>;
               const _innerStructSize = innerStructSize;
               innerObj.getPtr = () => structPtr.add(_offset);
               innerObj.getSize = () => _innerStructSize;
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
         const size = typeInfo.size.call(fieldContext);
         structSize += size;
         innerStructSize += size;
      });
      return rs;
   })(protoObj) as StructInstance<T>;
   // eslint-disable-next-line no-var
   var structPtr = address ?? Memory.alloc(structSize);
   structWrapper.getPtr = () => structPtr;
   structWrapper.getSize = () => structSize;
   return structWrapper as any;
}