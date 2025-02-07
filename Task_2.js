function getRemainder(n, m) {
  if (n === 0 && m === 0) return "NaN";
  if (m === 0 || n === 0) return "NaN";

  let larger = Math.max(n, m);
  let smaller = Math.min(n, m);

  return larger % smaller;
}

console.log(getRemainder(17, 5));
console.log(getRemainder(13, 72));
console.log(getRemainder(0, -1));
console.log(getRemainder(0, 1));
console.log(getRemainder(0, 0));
console.log(getRemainder(100, 25));
console.log(getRemainder(-8, 3));
