import _clone from "./internal/_clone";

/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>创建 一个浅复制（浅拷贝）的克隆 object。任何嵌套的对象或数组都通过引用拷贝，不会复制。</span>
 * |输入值|输出值
 * |---|---|
 * |*|*
 * @function clone
 * @param {*} target - 输入值
 * @return {*} - target的一个浅复制
 * @version 1.0.0
 */
const clone = _clone;

export default clone;