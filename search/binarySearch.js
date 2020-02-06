function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] > item) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return null;
}
console.log(binarySearch([1, 3, 5, 7, 9], 5));

// O(logn)