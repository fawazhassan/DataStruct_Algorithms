// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.queueArray = [];
  }

  add(arg) {
    this.queueArray.unshift(arg);
  }

  remove() {
    return this.queueArray.pop();
  }
}

q = new Queue();

q.add(7);
console.log(q.remove());
module.exports = Queue;
