function insertionSort(A) {
  for (j = 1; j < A.length; j++) {
    let value = A[j];
    let i = j - 1;
    while (i >= 0 && A[i] > value) {
      A[i + 1] = A[i];
      i--;
    }
    A[i + 1] = value;
  }
  return A;
}

console.log(insertionSort([5, 1, 4, 7, 9, 3]));

// O(n^2)
