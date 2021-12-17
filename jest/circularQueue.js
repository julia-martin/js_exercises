class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.queue = new Array(bufferSize);
    this.oldest = null;
    this.newest = null;
  }

  enqueue(data) {
    // queue is empty,
    if (this.oldest === null) {
      this.queue[0] = data;
      this.oldest = 0;
      this.newest = 0;
    // empty spot after newest
    } else if (this.queue[(this.newest + 1) % this.bufferSize] === undefined) {
      this.newest = (this.newest + 1) % this.bufferSize;
      this.queue[this.newest] = data;
    // queue is full, replace oldest
    } else {
      this.queue[this.oldest] = data;
      let old = this.oldest;
      this.newest = old;
      this.oldest = (old + 1) % this.bufferSize;
    }
  }

  dequeue() {
    if (this.queue.every(elem => elem === undefined)) return null;
    let removed = this.queue[this.oldest];
    this.queue[this.oldest] = undefined;
    this.oldest = (this.oldest + 1) % this.bufferSize;
    if (this.queue[this.oldest] === undefined) {
      this.oldest = null;
    }
    return removed;
  }
}

// let queue = new CircularQueue(3);
// console.log(queue.dequeue() === null);

// queue.enqueue(1);
// console.log(queue.queue);
// queue.enqueue(2);
// console.log(queue.queue);
// console.log(queue.dequeue() === 1);
// console.log(queue.queue);
// console.log(`Newest idx: ${queue.newest}`);

// queue.enqueue(3);
// console.log(`Newest idx: ${queue.newest}`);
// console.log(queue.queue);
// queue.enqueue(4);
// console.log(`Newest idx: ${queue.newest}`);
// console.log(queue.queue);
// console.log(queue.dequeue() === 2);
// console.log(queue.queue);

// queue.enqueue(5);
// console.log(queue.queue);
// queue.enqueue(6);
// console.log(queue.queue);
// queue.enqueue(7);
// console.log(queue.queue);
// console.log(queue.dequeue() === 5);
// console.log(queue.queue);
// console.log(queue.dequeue() === 6);
// console.log(queue.queue);
// console.log(queue.dequeue() === 7);
// console.log(queue.queue);
// console.log(queue.dequeue() === null);
// console.log(queue.queue);

console.log("New Queue: 4");
let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
console.log(anotherQueue.queue);
anotherQueue.enqueue(2);
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === 1);
console.log(anotherQueue.queue);

anotherQueue.enqueue(3);
console.log(anotherQueue.queue);
anotherQueue.enqueue(4);
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === 2);
console.log(anotherQueue.queue);

anotherQueue.enqueue(5);
console.log(anotherQueue.queue);
anotherQueue.enqueue(6);
console.log(anotherQueue.queue);
anotherQueue.enqueue(7);
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === null);
console.log(anotherQueue.queue);