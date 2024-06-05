function _quickSort (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivoIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivoIndex, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return _quickSort(left).concat([pivot], _quickSort(right));
}

export default _quickSort;