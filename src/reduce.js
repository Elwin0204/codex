import _reduce from "./internal/_reduce";

/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>reduce函数将一串值归结为一个值。memo是归约的初始状态，迭代器应返回它的每个后续步骤。迭代器传递了四个参数：memo，迭代的值和索引（或键），对整个列表的引用。
如果reduce初始调用中没有传递memo，则不会在列表的第一个元素上调用迭代器。而是在对列表中的下一个元素调用迭代器时将第一个元素作为memo传递。</span>
 * |输入值|输出值
 * |---|---|
 * |*|*
 * @function reduce
 * @param {Array|Object} list - 数组或者对象
 * @param {Function} iterator - 迭代器函数
 * @param {*} memo - 归约的初始状态
 * @returns {*} - 归约后的结果
 * @version 1.0.0
 */
const reduce = _reduce;

export default reduce;