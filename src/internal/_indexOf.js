import _createIdxFinder from "./_createIdxFinder";
import _findIdx from "./_findIdx";
import _sortedIdx from "./_sortedIdx";

const _indexOf = _createIdxFinder(1, _findIdx, _sortedIdx);

export default _indexOf;