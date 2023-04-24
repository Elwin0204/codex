import _isObject from './_isObject';
import _typeOf from './_typeOf';
import _extend from './_extend';
function _clone (target) {
  if (!_isObject(target)) return target;
  return _typeOf(target, 'Array') ? target.slice() : _extend({}, target);
}

export default _clone;