class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(other) {
    let shorter = this.strand.length < other.length ? this.strand : other;
    let count = 0;
    for (let idx = 0; idx < shorter.length; idx++) {
      if (this.strand[idx] !== other[idx]) {
        count++;
      }
    }
    return count;
  }
}
module.exports = DNA;