function wordSizes(string) {
  if (string.length === 0) return {};
  let result = {};
  string.split(' ').forEach(word => {
    word = word.toLowerCase().replace(/[^a-z]/, '');
    result[word.length] = (result[word.length] || 0) + 1;
  });
  return result;
}

console.log(wordSizes('Four score and seven.'));  // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));   // {}