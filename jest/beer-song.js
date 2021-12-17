class BeerSong {
  static verse(num) {
    if (num === 0) {
      return "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n";
    }
    return `${num} ${num === 1 ? 'bottle' : 'bottles'} of beer on the wall, ${num} ${num === 1 ? 'bottle' : 'bottles'} of beer.\n` + `Take ${num === 1 ? 'it' : 'one'} down and pass it around, ${num - 1 === 0 ? 'no more' : num - 1} ${num - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.\n`;
  }

  static verses(start, end) {
    let num = start;
    let verses = ''
    while (num >= end) {
      verses += this.verse(num);
      if (num === end) break;
      verses += '\n';
      num--;
    }
    return verses;
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;