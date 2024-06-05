import _throttle from "./internal/_throttle";
/**
 * @description
 * <span style='color:#ff4d4f;font-size:18px;font-weight:bold;'>创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 wait 毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。（注：详见：javascript 函数的 throttle 和 debounce）
默认情况下，throttle 将在你调用的第一时间尽快执行这个 function，并且，如果你在 wait 周期内调用任意次数的函数，都将尽快的被覆盖。如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false}。如果需要取消预定的 throttle ，可以在 throttle 函数上调用 .cancel()。</span>
 * |输入值|输出值
 * |---|---|
 * |*|*
 * @function throttle
 * @param {Function} func - 需要节流的函数
 * @param {Number} wait - 等待的时间(ms)
 * @param {Object} options - 配置选项
 * @return {Function} - 返回一个节流函数
 * @version 1.0.0
 */
const throttle = _throttle;

export default throttle;