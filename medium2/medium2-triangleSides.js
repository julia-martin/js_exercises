function triangle(side1, side2, side3) {
  if (side1 === 0 || side2 === 0 || side3 === 0) return 'invalid';
  if (side1 === side2 && side2 === side3) return 'equilateral';
  let sides = [side1, side2, side3].sort((a, b) => a - b);
  if (sides[0] + sides[1] <= sides[2]) return 'invalid';
  if (side1 !== side2 && side1 !== side3 && side2 !== side3) return 'scalene';
  else return 'isosceles';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"