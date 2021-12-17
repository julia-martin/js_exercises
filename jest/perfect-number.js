

class PerfectNumber {
  static findDivisors(number) {
    let divisors = [1];
    for (let div = 2; div < number; div ++) {
      if (number % div === 0) {
        divisors.push(div);
      }
    }
    return divisors;
  }

  static classify(number) {
    if (number < 1) {
      throw new Error('Number must be positive');
    }

    let aliquot = this.findDivisors(number).reduce((acc, elem) => acc + elem);
    if (aliquot < number) {
      return 'deficient';
    } else if (aliquot > number) {
      return 'abundant';
    } else {
      return 'perfect';
    }
  }
}

console.log(PerfectNumber.classify(28));
module.exports = PerfectNumber;