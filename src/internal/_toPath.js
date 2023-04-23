import _typeOf from "./_typeOf";

function _toPath (path) {
  return _typeOf(path, 'Array') ? path : [path];
}

export default _toPath;