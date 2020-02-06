function factorial(n) {
  let product = 1;
  for (i = 0; i < n; i++) {
    product = product * (i + 1);
  }
  return product;
}

console.log(factorial(5));
