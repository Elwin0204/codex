import _find from "./internal/_find";
/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>遍历列表或对象中的每个值，返回通第一个符合函数条件的值，如果没有，则返回未定义的值</span>
 * |输入值|输出值
 * |---|---|
 * |[1, 2, 3],2|1
 * @function find
 * @param {Array|Object} target - 数组或对象
 * @param {Function} predicate - 回调函数
 * @return {*} - 返回符合条件的元素
 * @version 1.0.0
 */
const find = _find;

export default find;