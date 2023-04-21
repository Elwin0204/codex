import _typeOf from "./internal/_typeOf";

/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>检查某个值的数据类型</span>
 * |输入值|输出
 * |---|---|
 * |123|Number
 * |'abcdef'|String
 * |true|Bollean
 * |[1, 2, 3, 4]|Array
 * |{name:'Elwin', age:30}|Object
 * |console.log('this is function')|Function
 * |undefined|Undefined
 * |null|Null
 * |new Date()|Date
 * |/^[a-zA-Z]{5,20}$/|RegExp
 * |new Error()|Error
 * @function typeOf
 * @param {*} value - 输入值
 * @param {String} [type] - 需要核对的数据类型，不传参则返回该数据的类型
 * @return {Boolean|String} - 返回首字母大写的数据类型（ex：Number）或者布尔值
 * @version 1.0.0
 */
const typeOf = _typeOf;
export default typeOf;