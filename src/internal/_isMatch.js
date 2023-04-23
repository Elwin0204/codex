import _keys from "./_keys";

function _isMatch (target, attrs) {
  const keys = _keys(attrs),
    len = keys.length;
  if (target == null) return !len;
  const obj = Object(target);
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}

export default _isMatch;