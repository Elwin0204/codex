import _keys from './_keys';
function _values (target) {
  const keys = _keys(target);
  const len = keys.length;
  const values = Array(length);
  for (let i = 0; i < len; i++) {
    values[i] = target[keys[i]];
  }
  return values;
}

export default _values;