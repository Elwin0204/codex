export const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

export const ObjProto = Object.prototype;
export const ArrayProto = Array.prototype;
export const SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;
export const toString = ObjProto.toString;
export const hasOwnProperty = ObjProto.hasOwnProperty;
export const nativeKeys = Object.keys;
export const nativeCreate = Object.create
export const nativeIsArray = Array.isArray;
export const push = ArrayProto.push;
export const slice = ArrayProto.slice;

export const hasEnumBug = !{
  toString: null
}.propertyIsEnumerable('toString');
export const nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'
];