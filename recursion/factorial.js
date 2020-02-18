function factorial(n) {
  if (n <= 1) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(4));

/* Psedo Code
function factorial(n)
  if n <= 1 then 
    return 1
  else 
    return n * factorial(n-1)
  end if
end function
*/
