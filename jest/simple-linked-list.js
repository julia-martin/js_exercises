class Element {
  constructor(data, nextElem = null) {
    this.data = data;
    this.nextElem = nextElem;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextElem === null;
  }

  next() {
    return this.nextElem;
  }

  setNext(next) {
    this.nextElem = next;
  }
}

class SimpleLinkedList {
  constructor(arr = []) {
    this.listSize = 0;
    this.listHead = null;
    if (Array.isArray(arr)) {
      this.listSize = arr.length;
      if (arr.length === 1) {
        this.listHead = new Element(arr[0]);
      } else if (arr.length > 1) {
        this.listHead = new Element(arr[0], new Element(arr[1]));
        let curr = this.listHead.next();
        for (let idx = 2; idx < arr.length; idx++) {
          curr.setNext(new Element(arr[idx]));
          curr = curr.next();
        }
      }
    }
  }

  static fromArray(arr) {
    return new SimpleLinkedList(arr);
  }

  size() {
    return this.listSize;
  }

  isEmpty() {
    return this.listSize === 0;
  }

  push(data) {
    let newElem = new Element(data, this.listHead);
    this.listHead = newElem;
    this.listSize++;
  }

  pop() {
    let removed = this.listHead.datum();
    this.listHead = this.listHead.next();
    this.listSize--;
    return removed;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.listHead.datum();
  }

  head() {
    return this.listHead;
  }

  toArray() {
    if (this.isEmpty()) return [];
    if (this.size() === 1) return [this.listHead.datum()];

    let arr = [];
    let curr = this.listHead;
    do {
      arr.push(curr.datum());
      curr = curr.next();
    } while (curr !== null)
    return arr;
  }

  reverse() {
    let reversedArr = this.toArray().reverse();
    return SimpleLinkedList.fromArray(reversedArr);
  }
}

module.exports = {SimpleLinkedList, Element};