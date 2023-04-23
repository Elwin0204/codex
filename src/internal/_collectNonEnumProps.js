import { nonEnumerableProps } from './_const';
import _typeOf from './_typeOf';
import _has from './_has';

function _collectNonEnumProps(target, keys) {
  const nonEnumIdx = nonEnumerableProps.length;
  const constructor = target.constructor;
  const proto = _typeOf(constructor, 'Function') && constructor.prototype || Object.prototype;

  let prop = 'constructor';
  if (_has(target, prop) && !keys.contains(prop)) keys.push(prop);
  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in target && target[prop] !== proto[prop] && !keys.contains(prop)) {
      keys.push(prop);
    }
  }
}

export default _collectNonEnumProps;