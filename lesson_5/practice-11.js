let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let arrCopy = JSON.stringify(arr);
arrCopy = JSON.parse(arrCopy);

newArr = arrCopy.map(obj => {
  for (key in obj) {
    obj[key] += 1;
  }
  return obj;
});

console.log(newArr);
