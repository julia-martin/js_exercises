class RomanNumeral {
  constructor(number) {
    this.number = number;
  }
  toRoman() {
    let roman = '';
    let num = this.number;
    while (num >= 1000) {
      num -= 1000;
      roman += 'M';
    }
    while (num >= 500) {
      if (num >= 900) {
        num -= 900;
        roman += 'CM';
      } else {
        num -= 500;
        roman += 'D';
      }
    }
    while (num >= 100) {
      if (num >= 400) {
        num -= 400;
        roman += 'CD';
      } else {
        num -= 100;
        roman += 'C';
      }
    }
    while (num >= 50) {
      if (num >= 90) {
        num -= 90;
        roman += 'XC';
      } else {
        num -= 50;
        roman += 'L';
      }
    }
    while (num >= 10) {
      if (num >= 40) {
        num -= 40;
        roman += 'XL';
      } else {
        num -= 10;
        roman += 'X';
      }
    }
    while (num >= 5) {
      if (num >= 9) {
        num -= 9;
        roman += 'IX';
      } else {
        num -= 5;
        roman += 'V';
      }
    }
    while (num > 0) {
      if (num === 4) {
        num -= 4;
        roman += 'IV';
      } else {
        num -= 1;
        roman += 'I';
      }
    }
    return roman;
  }
}

// let test = new RomanNumeral(2477);
// console.log(test.toRoman());

module.exports = RomanNumeral;