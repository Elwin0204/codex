import _isObject from "./_isObject";
import { nativeKeys, hasEnumBug } from './_const';
import _collectNonEnumProps from "./_collectNonEnumProps";
import _hasOwn from "./_hasOwn";
function _keys (target) {
  if (!_isObject(target)) return [];
  if (nativeKeys) return nativeKeys(target);
  const keys = [];
  for (let key in target) {
    if (_hasOwn(target, key)) keys.push(key)
  }
  if (hasEnumBug) _collectNonEnumProps(target, keys);
  return keys;
}

export default _keys;