import _cb from './_cb.js';
import _keys from './_keys';

function _findKey(target, predicate, context) {
  predicate = _cb(predicate, context);
  let keys = _keys(target), key;
  for (let i = 0, length = keys.length; i < length; i++) {
    key = keys[i];
    if (predicate(target[key], key, target)) return key;
  }
}

export default _findKey;