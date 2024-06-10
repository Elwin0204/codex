import _optimizeCb from './_optimizeCb';
import _isArrayLike from './_isArrayLike';
import _keys from './_keys';

function _each (obj, iteratee, context) {
  iteratee = _optimizeCb(iteratee, context);
  let i, length;
  if (_isArrayLike(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    let keys = _keys(obj);
    for (i = 0, length = keys.length; i < length; i++) {
      iteratee(obj[keys[i]], keys[i], obj);
    }
  }
  return obj;
}

export default _each;