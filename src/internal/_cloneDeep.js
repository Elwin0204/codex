//If Object.create isn't already defined, we just do the simple shim,
//without the second argument, since that's all we need here
const _create = Object.create;
if (typeof _create !== 'function') {
  _create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}
/**
 * Deep copy an object (make copies of all its object properties, sub-properties, etc.)
 * An improved version of http://keithdevens.com/weblog/archive/2007/Jun/07/javascript.clone
 * that doesn't break if the constructor has required parameters
 * 
 * It also borrows some code from http://stackoverflow.com/a/11621004/560114
 */
function _cloneDeep(target, /* INTERNAL */ _visited, _copiesVisited) {
  if (target === null || typeof (target) !== 'object') {
    return target;
  }

  //Honor native/custom clone methods
  if (typeof target.clone == 'function') {
    return target.clone(true);
  }

  //Special cases:
  //Date
  if (target instanceof Date) {
    return new Date(target.getTime());
  }
  //RegExp
  if (target instanceof RegExp) {
    return new RegExp(target);
  }
  //DOM Element
  if (target.nodeType && typeof target.cloneNode == 'function') {
    return target.cloneNode(true);
  }

  // Initialize the visited objects arrays if needed.
  // This is used to detect cyclic references.
  if (_visited === undefined) {
    _visited = [];
    _copiesVisited = [];
  }

  // Check if this object has already been visited
  const len = _visited.length;
  for (let i = 0; i < len; i++) {
    // If so, get the copy we already made
    if (target === _visited[i]) {
      return _copiesVisited[i];
    }
  }

  //Array
  if (Object.prototype.toString.call(target) == '[object Array]') {
    //[].slice() by itself would soft clone
    const ret = target.slice();

    //add it to the visited array
    _visited.push(target);
    _copiesVisited.push(ret);

    let i = ret.length;
    while (i--) {
      ret[i] = _cloneDeep(ret[i], _visited, _copiesVisited);
    }
    return ret;
  }

  //If we've reached here, we have a regular object

  //make sure the returned object has the same prototype as the original
  let proto = (Object.getPrototypeOf ? Object.getPrototypeOf(target) : target.__proto__);
  if (!proto) {
    proto = target.constructor.prototype; //this line would probably only be reached by very old browsers 
  }
  const dest = _create(proto);

  //add this object to the visited array
  _visited.push(target);
  _copiesVisited.push(dest);

  for (const key in target) {
    //Note: this does NOT preserve ES5 property attributes like 'writable', 'enumerable', etc.
    //For an example of how this could be modified to do so, see the singleMixin() function
    dest[key] = _cloneDeep(target[key], _visited, _copiesVisited);
  }
  return dest;
}

export default _cloneDeep;