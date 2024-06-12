import _isArrayLike from "./_isArrayLike";
import _keys from "./_keys";
import _optimizeCb from "./_optimizeCb";

function _createReduce(dir) {
  const reducer = function (target, iteratee, memo, initial) {
    const keys = !_isArrayLike(target) && _keys(target),
      length = (keys || target).length,
      index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = target[keys ? keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      const currentKey = keys ? keys[index] : index;
      // 这里使用迭代器，所以需要使用_optimizeCb
      memo = iteratee(memo, target[currentKey], currentKey, target);
    }
    return memo;
  }

  return function(target, iteratee, memo, context) {
    const initial = arguments.length >= 3;
    return reducer(target, _optimizeCb(iteratee, context, 4), memo, initial);
  }
}

export default _createReduce;