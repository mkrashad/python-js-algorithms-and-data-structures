function bubble_sort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubble_sort([5, 1, 4, 7, 9, 3]));

//O(n^2)
