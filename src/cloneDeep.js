import _cloneDeep from "./internal/_cloneDeep";

/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>创建 一个深复制（深拷贝）的克隆 object。</span>
 * |输入值|输出值
 * |---|---|
 * |*|*
 * @function cloneDeep
 * @param {*} target - 需要拷贝的值
 * @param {*} _visited - 循环引用初始化
 * @param {*} _copiesVisited - 循环引用初始化副本
 * @return {*} - target的一个深复制
 * @version 1.0.0
 */
const cloneDeep = _cloneDeep;

export default cloneDeep;