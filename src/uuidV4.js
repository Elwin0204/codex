import _uuidV4 from "./internal/_uuidV4";

/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>返回UUID V4版本的字符串(x为[0-9a-f], M为[1-5]，N为[8|9|a|b])</span>
 * |输入值|输出值
 * |---|---|
 * |*|xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
 * @function uuidV4
 * @return {String} - 返回UUID V4版本的字符串
 * @version 1.0.0
 */
const uuidV4 = _uuidV4;

export default uuidV4;