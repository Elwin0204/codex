function _has(target, prop) {
  return target != null && hasOwnProperty.call(target, prop);
}

export default _has;