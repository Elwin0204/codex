import _now from "./_now";

function _throttle (func, wait, options) {
  let timeout, ctx, args, result;
  let previous = 0;
  if (!options) options = {};

  const later = function () {
    previous = options.leading === false ? 0 : _now();
    timeout = null;
    result = func.apply(ctx, args);
    if (!timeout) ctx = args = null;
  }

  const _throttled = function () {
    const now = _now();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    ctx = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(ctx, args);
      if (!timeout) ctx = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  _throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = ctx = args = null;
  };
  return _throttled;
}

export default _throttle;