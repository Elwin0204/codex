import { MAX_ARRAY_INDEX } from "./_const";

function _createSizePropertyCheck(getSizeProperty) {
  return function (collection) {
    const sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty === 'number' && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
  }
}

export default _createSizePropertyCheck; // 创建一个函数，用于检查给定集合的大小属性是否为数字且大于等于0且小于等于MAX_ARRAY_INDEX。