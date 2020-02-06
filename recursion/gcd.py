def gcd(a, b):
    if b == 0:
        return a
    else:
        return gcd(b, a % b)


print(gcd(10, 5))

# Psedo Code
# function gcd (a, b)
#  if b==0
#    return a
#  else
#    return gcd(b,a%b)
