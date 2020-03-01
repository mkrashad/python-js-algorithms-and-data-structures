def insertionSort(A):
    for i in range(1, len(A)):
        value = A[i]
        j = i-1
        while j >= 0 and A[j] > value:
            A[j+1] = A[j]
            j -= 1
        A[j+1] = value
    return A


print(insertionSort([5, 6, 2, 4, 1]))

# O(n^2)
