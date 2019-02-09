// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }
  add(arg) {
    this.stackA.push(arg);
  }

  peek() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    return this.stackB.peek();
  }

  remove() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    return this.stackB.pop();
  }
}

const q = new Queue();

q.add(5);
q.add(4);
console.log(q.peek());
console.log(q.remove());
q.remove();

module.exports = Queue;
