import time

ef_cache = {}


def expessive_func(num):
    if num in ef_cache:
        return ef_cache[num]

    print("Computing ...", num)
    time.sleep(1)
    result = num * num
    ef_cache[num] = result
    return result


result = expessive_func(4)
print(result)

result = expessive_func(10)
print(result)

result = expessive_func(4)
print(result)

result = expessive_func(10)
print(result)
