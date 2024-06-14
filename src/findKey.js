import _findKey from "./internal/_findKey";
/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>类似于 findIdx，但用于对象中的键。返回符合条件的键。</span>
 * |输入值|输出值
 * |---|---|
 * |[1, 2, 3],2|1
 * @function findKey
 * @param {Object} obj - 对象
 * @param {Function} fn - 回调函数
 * @return {*} - 返回符合条件的键
 * @version 1.0.0
 */
const findKey = _findKey;

export default findKey;