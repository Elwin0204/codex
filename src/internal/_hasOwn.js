import { hasOwnProperty } from './_const';
function _hasOwn (target, prop) {
  return target != null && hasOwnProperty.call(target, prop);
}

export default _hasOwn;