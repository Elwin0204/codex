

import _reduceRight from "./internal/_reduceRight";

/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>reduce 的右结合版本。</span>
 * |输入值|输出值
 * |---|---|
 * |*|*
 * @function reduceRight
 * @param {Array|Object} list - 数组或者对象
 * @param {Function} iterator - 迭代器函数
 * @param {*} memo - 归约的初始状态
 * @returns {*} - 归约后的结果
 * @version 1.0.0
 */
const reduceRight = _reduceRight;

export default reduceRight;