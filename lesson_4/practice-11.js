let statement = "The Flintstones Rock";
let result = {};
statement.split('').filter(c => c !== ' ').forEach((e) => {
  if (result.hasOwnProperty(e)) {
    result[e] += 1;
  } else {
    result[e] = 1;
  }
});

console.log(result);
