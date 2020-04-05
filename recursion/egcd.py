def egcd(a, b):
	if a == 0:
		return (b, 0, 1)
	else:
		gcd, x, y = egcd(b % a, a)
		return(gcd, y - (b//a) * x, x)


gcd, a, b = egcd(588, 78)
print(gcd,a,b)
