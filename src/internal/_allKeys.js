import { hasEnumBug } from "./_const";
import _isObject from "./_isObject";
import _collectNonEnumProps from './_collectNonEnumProps';

function _allKeys (target) {
  if (!_isObject(target)) return [];
  const keys = [];
  for (const key in target) keys.push(key);
  if (hasEnumBug) _collectNonEnumProps(target, keys);
  return keys;
}

export default _allKeys;