function _optimizeCb (func, ctx, argCount) {
  if (ctx === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function (target) {
        return func.call(ctx, target);
      };
    case 3:
      return function (target, idx, collection) {
        return func.call(ctx, target, idx, collection);
      };
    case 4:
      return function (accumulator, target, idx, collection) {
        return func.call(ctx, accumulator, target, idx, collection);
      };
  };
  return function () {
    return func.apply(ctx, arguments);
  };
}

export default _optimizeCb;