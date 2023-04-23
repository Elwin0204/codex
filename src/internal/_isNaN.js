import _typeOf from "./_typeOf";

function _isNaN (target) {
  return _typeOf(target, 'Number') && isNaN(target);
}

export default _isNaN;