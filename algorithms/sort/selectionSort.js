function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort([5, 1, 7, 3, 9, 8, 4]));
// O(n^2)
