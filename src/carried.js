import _carried from "./internal/_carried";
/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>传入一个函数fn, 当参数个数fn的参数个数时，返回函数， 当参数等于fn的参数个数时，执行fn。</span>
 * |输入值|输出值
 * |---|---|
 * |fn|any
 * @function carried
 * @param {Function} fn - 固定参数个数的函数
 * @return {any} - 任何值
 * @version 1.0.0
 */
const carried = _carried;

export default carried;