import _each from "./internal/_each";

/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>遍历元素列表，依次将每个元素传递给 iteratee 函数。如果传递了上下文对象，则 iteratee 将绑定到该上下文对象。每次调用 iteratee 时都会使用三个参数：(element, index, list)。如果 list 是 JavaScript 对象，则 iteratee 的参数将为 (value, key, list)。返回用于链接的列表。</span>
 * |输入值|输出值
 * |---|---|
 * |*|*
 * @function each
 * @param {Array|Object} list - 数组或者对象
 * @return {Array|Object} - 返回遍历后的结果
 * @version 1.0.0
 */
const each = _each;

export default each;