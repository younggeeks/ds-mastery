export class Stack<T> {
  nodes: Array<T>;

  constructor() {
    this.nodes = [];
  }

  pop() {
    return this.nodes.pop();
  }

  isEmpty() {
    return this.nodes.length <= 0;
  }

  peek() {
    return this.nodes[this.nodes.length];
  }

  push(value: T) {
    return this.nodes.push(value);
  }
}