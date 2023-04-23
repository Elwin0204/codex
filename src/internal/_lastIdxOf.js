import _createIdxFinder from "./_createIdxFinder";
import _findLastIdx from "./_findLastIdx";

const _lastIdxOf = _createIdxFinder(-1, _findLastIdx);

export default _lastIdxOf;