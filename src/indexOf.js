import _indexOf from "./internal/_indexOf";
/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>返回 value 在该 array 中的索引值, 如果 value 不存在 array 中就返回-1。使用原生的 indexOf 函数，除非它失效。如果您正在使用一个大数组，你知道数组已经排序，传递 true 给 isSorted 将更快的用二进制搜索..,或者，传递一个数字作为第三个参数，为了在给定的索引的数组中寻找第一个匹配值。</span>
 * |输入值|输出值
 * |---|---|
 * |[1, 2, 3],2|1
 * @function indexOf
 * @param {Array} array - 在哪里查找
 * @param {*} value - 需要查找的值
 * @param {Number} idx - 查找的起始索引值
 * @return {Number} - 返回匹配的第一个索引值
 * @version 1.0.0
 */
const indexOf = _indexOf;

export default indexOf;