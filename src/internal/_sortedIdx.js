import _len from "./_len";

function _sortedIdx (array, target, iteratee, ctx) {
  iteratee = _cb(iteratee, ctx, 1);
  const value = iteratee(target);
  let low = 0, high = _len(array);
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid] < value)) low = mid + 1; else high = mid;
  }
  return low;
}

export default _sortedIdx;