let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let newObj = {};
flintstones.forEach((elem, i) =>  newObj[elem] = i);
console.log(newObj);
