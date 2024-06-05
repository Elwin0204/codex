const _now = Date.now || function () {
  return new Date().getTime();
}

export default _now;