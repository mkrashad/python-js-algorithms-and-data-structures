def fibonacci(n):
    if n == 1:
        return 1
    elif n == 2:
        return 1
    elif n > 2:
        return fibonacci(n-1) + fibonacci(n-2)


print(fibonacci(6))

# Psedo Code
# function fibonacci(n)
#    if n == 1
#        return 1
#     else if n == 2
#        return 1
#     else if n > 2
#        return fibonacci(n-1) + fibonacci(n-2)
#    end if
# end function
