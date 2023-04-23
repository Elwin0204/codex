import _baseIteratee from "./_baseIteratee";
import _iteratee from "./_iteratee";

function _cb (target, ctx, argCount) {
  // if (_iteratee) return 
  return _baseIteratee(target, ctx, argCount);
}

export default _cb;