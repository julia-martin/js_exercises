'use strict';
Math.seedrandom = require('seedrandom');
Math.seedrandom(1234);

class Robot {
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static DIGITS = '0123456789';
  static takenNames = [];

  constructor() {
    this.myName = undefined;
  }

  name() {
    if (this.myName) return this.myName;
    let name;
    do {
      name = '';
      for (let count = 0; count < 2; count++) {
        name += Robot.ALPHABET[Math.floor(Math.random() * 26)];
      }
      for (let count = 0; count < 3; count++) {
        name += Robot.DIGITS[Math.floor(Math.random() * 10)];
      }
    } while (Robot.takenNames.includes(name));

    Robot.takenNames.push(name);
    this.myName = name;
    return name;
  }

  reset() {
    let idx = Robot.takenNames.indexOf(this.myName);
    Robot.takenNames.splice(idx, 1);
    this.myName = undefined;
  }
}

// let foo = new Robot();
// console.log(foo.name());

module.exports = Robot;