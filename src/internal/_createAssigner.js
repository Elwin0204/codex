function _createAssigner(keyFunc, defaults) {
  return function (target) {
    const len = arguments.length;
    if (defaults) target = Object(target);
    if (len < 2 || target == null) return target;
    for (let i = 1; i < len; i++) {
      const source = arguments[i];
      const keys = keyFunc(source);
      const len1 = keys.length;
      for (let j = 0; j < len1; ++j) {
        const key = keys[j];
        if (!defaults || target[key] === void 0) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
}

export default _createAssigner;