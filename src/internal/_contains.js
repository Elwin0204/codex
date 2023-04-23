import _isArrayLike from './_isArrayLike';
import _values from './_values';
import _indexOf from './_indexOf';

function _contains(target, item, fromIdx, guard) {
  if (!_isArrayLike(target)) target = _values(target);
  if (typeof fromIdx != 'number' || guard) fromIdx = 0;
  return _indexOf(target, item, fromIdx) >= 0;
}

export default _contains;