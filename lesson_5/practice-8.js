let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = [];

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    let letters = word.split('');
    letters.forEach(letter => {
      if ('aeiou'.includes(letter.toLowerCase())) {
        vowels.push(letter);
      }
    });
  })
});
console.log(vowels);
