def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)


print(factorial(5))


# Psedo Code
# function factorial(n)
#   if n = 0 then
#     return 1
#   else
#     return n * factorial(n-1)
#   end if
# end function
