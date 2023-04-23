import { slice } from "./_const";
import _isNaN from "./_isNaN";
import _len from "./_len";

function _createIdxFinder (dir, predicateFind, sortedIdx) {
  return function (array, item, idx) {
    let i = 0, len = _len(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + len, i);
      } else {
        len = idx >= 0 ? Math.min(idx + 1, len) : idx + len + 1;
      } 
    } else if (sortedIdx && idx && len) {
      idx = sortedIdx(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, len), _isNaN);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : len - 1; idx >= 0 && idx < len; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}

export default _createIdxFinder;