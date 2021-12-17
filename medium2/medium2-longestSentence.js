function longestSentence(text) {
  let words = text.split(' ');
  let longestSentence = ['', 0];
  let startIdx = 0;
  words.forEach((word, idx) => {
    if (word.endsWith('.') || word.endsWith('?') || word.endsWith('!')) {
      let sentence = words.slice(startIdx, idx + 1);
      let length = sentence.length;
      if (length > longestSentence[1]) {
        longestSentence = [sentence, length];
      }
      startIdx = idx + 1;
    }
  });
  console.log(longestSentence[0].join(' '));
  console.log(`The longest sentence has ${longestSentence[1]} words.`)
}