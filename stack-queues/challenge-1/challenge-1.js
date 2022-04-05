class Stack {
  constructor() {
    this.stack = [];
    // exposes push(item), pop, peek
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }
}
