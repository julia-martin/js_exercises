function swapName(name) {
  let names = name.split(' ');
  let last = names[names.length - 1];
  return `${last}, ${names.slice(0, names.length - 1).join(' ')}`;
}
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"