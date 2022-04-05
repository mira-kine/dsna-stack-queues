class Stack {
  constructor() {
    this.stack = [];
    // exposes push(item), pop, peek
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    const list = this.stack;
    return list.length ? list.pop() : null;
  }

  peek() {
    return this.stack[this.length - 1];
  }
}
