function _carried (fn) {
  return function __carried (...args) {
    return args.length >= fn.length ? fn.call(this, ...args) : (...rest) => __carried.call(this, ...args, ...rest);
  }
}

export default _carried;