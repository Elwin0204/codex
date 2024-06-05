import _now from "./_now";

function _debounce (func, wait, immediate) {
  let timeout, previous, args, result, ctx;

  const later = function () {
    const passed = _now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result = func.apply(ctx, args);
      if (!timeout) args = ctx = null;
    }
  };

  const _debounced = _restArgs(function (_args) {
    ctx = this;
    args = _args;
    previous = _now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) result = func.apply(ctx, args);
    }
    return result;
  });

  _debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = args = ctx = null;
  };

  return _debounced;
}

export default _debounce;