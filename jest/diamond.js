class Diamond {
  static makeDiamond(letter) {
    let lastCode = letter.charCodeAt(0);
    let output = [];
    let charCode = 65;
    let diff = lastCode - charCode;
    let totalLen = diff * 2 + 1;
    let space = diff;
    while (true) {
      output.push(this.makeLine(String.fromCharCode(charCode), space));
      if (charCode === lastCode) break;
      charCode++;
      space--;
    }
    while (output.length < totalLen && charCode >= 65) {
      charCode--;
      space++;
      output.push(this.makeLine(String.fromCharCode(charCode), space));
    }
    return output.join('');
  }

  static makeLine(letter, space) {
    if (letter === 'A') {
      return ' '.repeat(space) + 'A' + ' '.repeat(space) + '\n';
    }
    return ' '.repeat(space) + letter + ' '.repeat(Math.max(0, (letter.charCodeAt(0) - 65 - 1) * 2 + 1)) + letter + ' '.repeat(space) + '\n';
  }
}
module.exports = Diamond;