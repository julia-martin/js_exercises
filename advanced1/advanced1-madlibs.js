function getRandWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function madlibs(template) {
  const REPLACEMENTS = {
    ADJECTIVE: ['funny', 'sad', 'mad', 'lazy', 'sleepy', 'noisy', 'hungry', 'tired'],
    NOUN: ['bird', 'fox', 'dog', 'head', 'leg', 'pig', 'cat'],
    ADVERB: ['easily', 'quickly', 'lazily', 'excitedly', 'barely'],
    VERB: ['jumps', 'runs', 'sleeps', 'flies', 'lifts', 'bites', 'licks', 'eats', 'shouts']
  };
  Object.keys(REPLACEMENTS).forEach(wordType => {
    let regex = new RegExp(wordType, 'g');
    let matches = template.match(regex);
    if (matches) {
      matches.forEach(word => {
        template = template.replace(word, getRandWord(REPLACEMENTS[word]));
      });
    }
  });
  return template;
}

// examples
let template1 = 'The ADJECTIVE brown NOUN ADVERB VERB the ADJECTIVE yellow NOUN, who ADVERB VERB his NOUN and looks around.';
console.log(madlibs(template1));
console.log(madlibs(template1));

let template2 = "The NOUN VERB the NOUN's NOUN.";
console.log(madlibs(template2));
console.log(madlibs(template2));