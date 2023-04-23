function _shallowProperty(prop) {
  return function (target) {
    return target == null ? void 0 : target[prop];
  }
}

export default _shallowProperty;