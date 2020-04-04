def egcd(a, b):
	if a == 0:
		return (b, 0, 1)
	else:
		gcd, x, y = egcd(b % a, a)
		return(gcd, y - (b//a) * x, x)
    
num1 = int(input("Enter num1: "))
num2 = int(input("Enter num2: "))
gcd, a, b = egcd(num1, num2)

print(f'gcd({num1}, {num2}) = {gcd} = ({a}) * {num1} + ({b}) * {num2}')
