import { ObjProto } from './_const';
function _typeOf(target, type) {
  const t = typeof target;
  if (t !== 'object') {
    const t1 = t.charAt(0).toUpperCase() + t.slice(1, t.length);
    return type ? t1 === type : t1;
  } else {
    const t2 = ObjProto.toString.call(target).replace(/^\[object (\S+)]$/, '$1');
    return type ? t2 === type : t2;
  }
}

export default _typeOf;