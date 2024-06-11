import _cb from './_cb';
import _isArrayLike from './_isArrayLike';
import _keys from './_keys';

function _map(target, iteratee, context) {
  iteratee = _cb(iteratee, context);
  const keys = !_isArrayLike(target) && _keys(target),
        length = (keys || target).length,
        results = Array(length);
  for (let index = 0; index < length; index++) {
    const currentKey = keys ? keys[index] : index;
    results[index] = iteratee(target[currentKey], currentKey, target);
  }
  return results;
}

export default _map;