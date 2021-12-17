class Series {
  constructor(string) {
    this.string = string;
  }

  slices(digits) {
    if (digits > this.string.length) {
      throw new Error("Must be less digits than string's length");
    }
    let strArr = this.string.split('').map(x => Number(x));
    let series = [];
    for (let idx = 0; idx <= strArr.length - digits; idx++) {
      let slice = strArr.slice(idx, idx + digits);
      series.push(slice);
    }
    return series;
  }
}

module.exports = Series;