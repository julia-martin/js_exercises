class CustomSet {
  constructor(elements = []) {
    this.elements = elements;
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  contains(elem) {
    return this.elements.includes(elem);
  }

  isSubset(otherSet) {
    return this.elements.every(elem => otherSet.contains(elem));
  }

  isDisjoint(otherSet) {
    return !this.elements.some(elem => otherSet.contains(elem));
  }

  isSame(otherSet) {
    return (this.elements.length === otherSet.elements.length) && this.isSubset(otherSet);
  }

  add(elem) {
    if (!this.contains(elem)) {
      this.elements.push(elem);
    }
    return this;
  }

  intersection(otherSet) {
    return new CustomSet(this.elements.filter(elem => otherSet.contains(elem)));
  }

  difference(otherSet) {
    return new CustomSet(this.elements.filter(elem => !otherSet.contains(elem)));
  }

  union(otherSet) {
    let union = new CustomSet(this.elements);
    otherSet.elements.forEach(elem => {
      if (!union.contains(elem)) {
        union.add(elem);
      }
    });
    return union;
  }
}

module.exports = CustomSet;