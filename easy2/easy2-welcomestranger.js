function greetings(name, obj) {
  return `Hello, ${name.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
console.log(greetings(["Julia", "D", "Martin"], {title: "Junior", occupation: "DS"}));