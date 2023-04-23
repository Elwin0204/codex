function _isObject(target) {
  const type = typeof target;
  return type === 'function' || (type === 'object' && !!target);
}

export default _isObject;