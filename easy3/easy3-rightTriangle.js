function triangle(num) {
  for (let row = 1; row <= num; row++) {
    console.log(`${' '.repeat(num - row)}${'*'.repeat(row)}`);
  }
}
triangle(5);
triangle(9);