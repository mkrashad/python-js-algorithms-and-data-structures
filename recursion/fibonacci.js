function fibonnaci(n) {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1;
  } else if (n > 2) {
    return fibonnaci(n - 1) + fibonnaci(n - 2);
  }
}

console.log(fibonnaci(6));

// # Psedo Code
// # function fibonacci(n)
// #    if n == 1
// #        return 1
// #     else if n == 2
// #        return 1
// #     else if n > 2
// #        return fibonacci(n-1) + fibonacci(n-2)
// #    end if
// # end function
