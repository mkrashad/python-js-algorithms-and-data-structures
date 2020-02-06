function insertionSort(A) {
  for (j = 1; j < A.length; j++) {
    let key = A[j];
    let i = j - 1;
    while (i >= 0 && A[i] > key) {
      A[i + 1] = A[i];
      i--;
    }
    A[i + 1] = key;
  }
  return A;
}

console.log(insertionSort([5, 1, 4, 7, 9, 3]));

// O(n^2)
