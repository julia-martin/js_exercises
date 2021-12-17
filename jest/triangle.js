class Triangle {
  constructor(side1, side2, side3) {
    this._validateSides([side1, side2, side3]);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return 'equilateral';
    } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  _validateSides(sides) {
    if (sides.some(side => side <= 0)) {
      throw new Error('Sides must have positive sides');
    }
    let sorted = sides.slice();
    sorted.sort((a, b) => a - b);
    if (sorted[0] + sorted[1] <= sorted[2]) {
      throw new Error('Violates triangle inequality');
    }
  }
}
module.exports = Triangle;