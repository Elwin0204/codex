function _deepGet (target, path) {
  const len = path.length;
  for (let i = 0; i < len; i++) {
    if (target == null) return void 0;
    target = target[path[i]];
  }
  return len ? target : void 0;
}

export default _deepGet;