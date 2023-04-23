import _identity from './_identity';
import _typeOf from "./_typeOf";
import _optimizeCb from './_optimizeCb';

function _baseIteratee (target, ctx, argCount) {
  if (target == null) return _identity;
  if (_typeOf(target, 'Function')) return _optimizeCb(target, ctx, argCount);
  if (_typeOf(target, 'Object')) return _matcher(target);
  return _property(target);
}

export default _baseIteratee;