import _len from "./_len";
import {
  MAX_ARRAY_INDEX
} from './_const';

function _isArrayLike(collection) {
  const len = _len(collection);
  return typeof len == 'number' && len >= 0 && len <= MAX_ARRAY_INDEX;
}

export default _isArrayLike;