egcd = (a, b) => {
  if (b === 0) return { gcd: a, x: 1, y: 0 };

  const r = a % b;
  const tmp = egcd(b, r);

  return { gcd: tmp.gcd, x: tmp.y, y: tmp.x - Math.floor(a / b) * tmp.y };
};


console.log(egcd(588,78))