def selection_sort(arr):
    for i in range(0, len(arr)):
        min = i
        for j in range(i+1, len(arr)):
            if arr[min] > arr[j]:
                min = j
        arr[i], arr[min] = arr[min], arr[i]
    return arr


print(selection_sort([5, 1, 7, 3, 9, 8, 4]))
# O(n^2)
