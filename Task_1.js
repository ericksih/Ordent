function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let x = 0,
    y = 0;

  for (let direction of walk) {
    if (direction === "n") y++;
    if (direction === "s") y--;
    if (direction === "e") x++;
    if (direction === "w") x--;
  }

  return x === 0 && y === 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["e", "w", "e", "w", "e", "w", "e", "w", "e", "w"]));
console.log(isValidWalk(["n", "s", "e", "w", "n", "s", "e", "w", "n", "s"]));
console.log(isValidWalk(["n", "s"]));
