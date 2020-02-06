def binary_search(A, item):
    low = 0
    high = len(A) - 1

    while low <= high:
        mid = (low + high) / 2
        guess = A[mid]
        if guess == item:
            return mid
        elif guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


example = [1, 3, 5, 7, 9]
print(binary_search(example,7))

# O(logn)
