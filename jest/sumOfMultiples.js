class SumOfMultiples {
  constructor(...args) {
    this.set = args.length > 0 ? args : [3, 5];
  }

  to(limit) {
    let multiples = [];
    this.set.forEach(num => {
      let multiplier = 1;
      while ((num * multiplier) < limit) {
        let multiple = num * multiplier;
        if (!multiples.includes(multiple)) {
          multiples.push(multiple);
        }
        multiplier++;
      }
    });
    return multiples.reduce((acc, num) => acc + num, 0);
  }

  static to(limit) {
    return new SumOfMultiples().to(limit);
  }
}

module.exports = SumOfMultiples;