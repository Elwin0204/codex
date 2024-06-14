import _isArrayLike from './_isArrayLike';
import _findIdx from './_findIdx';
import _findKey from './_findKey';

function _find(target, predicate, context) {
  const keyFinder = _isArrayLike(target) ? _findIdx : _findKey;
  const key = keyFinder(target, predicate, context);
  if(key !== void 0 && key !== -1) return target[key];
}

export default _find;