import _typeOf from "./internal/_typeOf";

/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>返回value的数据类型，如果参数胡type传入值，则检查value是否为type类型</span>
 * |输入值|输出值
 * |---|---|
 * |123|Number
 * |'abc'|String
 * |true|Bollean
 * |undefined|Undefined
 * |null|Null
 * |Symbol('Elwin')|Symbol
 * |[1, 2, 3]|Array
 * |{name:'Elwin'}|Object
 * |function () {}|Function
 * |new Date()|Date
 * |/^[a-zA-Z]{5,20}$/|RegExp
 * |new Error()|Error
 * |new Map()|Map
 * |new Set()|Set
 * |new WeakMap()|WeakMap
 * |new WeakSet()|WeakSet
 * @function typeOf
 * @param {*} value - 输入值
 * @param {String} [type] - 需要核对的数据类型，不传参则返回该数据的类型
 * @return {Boolean|String} - 返回首字母大写的数据类型（ex：Number）或者布尔值
 * @version 1.0.0
 */
const typeOf = _typeOf;
export default typeOf;