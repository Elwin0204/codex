function _property (path) {
  path = _toPath(path);
  return function (target) {
    return _deepGet(target, path);
  }
}

export default _property;