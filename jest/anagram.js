class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(words) {
    return words.filter(inputWord => {
      if (this.word.toLowerCase() === inputWord.toLowerCase()) {
        return false;
      }
      return this._sortWord(inputWord) === this._sortWord(this.word);
    });
  }
  _sortWord(word) {
    return word.toLowerCase().split('').sort().join('');
  }
}

module.exports = Anagram;