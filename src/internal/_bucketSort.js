function _bucketSort (arr, bucketSize = 5) {
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

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < len; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  const sortedArr = [];
  for (let i = 0; i < bucketCount; i++ ) {
    // 提示：这里可以对每个桶中的元素进行插入排序或快速排序等
    // if (buckets[i]) {
    //   insertionSort(buckets[i]); // 使用插入排序对每个桶中的元素进行排序
    //   sortedArray.push(...buckets[i]); // 将排序后的桶合并到有序序列中
    // }
    if (bucketSize === 1) {
      sortedArr.push(...buckets[i]);
    } else {
      const bucket = _bucketSort(buckets[i], bucketSize - 1);
      sortedArr.push(...bucket);
    }
  }

  return sortedArr;
}

export default _bucketSort;