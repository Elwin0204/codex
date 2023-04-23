import _extendOwn from "./_extendOwn";
import _isMatch from "./_isMatch";
function _matcher (attrs) {
  attrs = _extendOwn({}, attrs);
  return function (target) {
    return _isMatch(target, attrs);
  };
}

export default _matcher;