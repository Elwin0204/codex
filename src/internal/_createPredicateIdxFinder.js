import _len from "./_len";

function _createPredicateIdxFinder (dir) {
  return function (array, predicate, ctx) {
    predicate = _cb(predicate, ctx);
    const len = _len(array);
    const idx = dir > 0 ? 0 : len - 1;
    for (; idx >= 0 && idx < len; idx += dir) {
      if (predicate(array[idx], idx, array)) return idx;
    }
    return -1;
  }
}

export default _createPredicateIdxFinder;