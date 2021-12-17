class Octal {
  constructor(octal) {
    this.octal = this._validate(octal);
  }

  toDecimal() {
    let decimal = 0;
    let str = this.octal.split('').reverse();
    for (let power = 0; power < str.length; power++) {
      decimal += str[power] * (8**power);
    }
    return decimal;
  }

  _validate(input) {
    if (input.match(/[^0-7]/)) return '0';
    return input;
  }
}

module.exports = Octal;

let test = new Octal('abc');
console.log(test.toDecimal());