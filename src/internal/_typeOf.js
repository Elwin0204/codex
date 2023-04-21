function _typeOf(value, type) {
  const t = typeof value;
  if (t !== 'object') {
    if (type) {
      return t.charAt(0).toUpperCase() + t.slice(1, t.length) === type;
    } else {
      return t.charAt(0).toUpperCase() + t.slice(1, t.length);
    }
  } else {
    if (type) {
      return Object.prototype.toString.call(value).replace(/^\[object (\S+)]$/, '$1') === type;
    } else {
      return Object.prototype.toString.call(value).replace(/^\[object (\S+)]$/, '$1')
    }
  }
}

export default _typeOf;