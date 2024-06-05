function _countingSort (arr) {
  const len = arr.length;

  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  const countArr = new Array(max - min + 1).fill(0);
  for (let i = 0; i < len; i++) {
    countArr[arr[i] - min]++;
  }

  let outputIndex = 0;
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      arr[outputIndex] = i + min;
      outputIndex++;
      countArr[i]--;
    }
  }

  return arr;
}

export default _countingSort;