type TraversalCallback = (value: any) => void;
export class Graph<T> {
  list: Map<T, Array<T>>;

  constructor() {
    this.list = new Map<T, Array<T>>();
  }

  addVertice(value: T) {
    this.list.set(value, []);
  }

  addEdge(src: T, dest: T) {
    // @ts-ignore
    this.list.get(src).push(dest);
    // @ts-ignore
    this.list.get(dest).push(src);
  }

  bfs(node: T, callback: TraversalCallback) {
    let q = new Queue<T>();

    let visited = new Set<T>();

    q.enqueue(node);
    visited.add(node);

    while (!q.isEmpty()) {
      let element = q.dequeue();

      callback(element);

      // @ts-ignore
      let items = this.list.get(element) || [];
      for (let i in items) {
        let neighbor = items[i];
        if (!visited.has(neighbor)) {
          q.enqueue(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }

  dfs(node: T, callback: TraversalCallback) {
    let q = new Stack<T>();

    let visited = new Set<T>();

    q.push(node);
    visited.add(node);

    while (!q.isEmpty()) {
      let element = q.pop();

      callback(element);

      // @ts-ignore
      let items = this.list.get(element) || [];
      for (let i in items as Array<T>) {
        let neighbor = items[i];
        if (!visited.has(neighbor)) {
          q.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
}

export class Queue<T> {
  nodes: Array<T>;
  constructor() {
    this.nodes = [];
  }

  enqueue(value: T) {
    this.nodes.push(value);
  }

  dequeue() {
    return this.nodes.shift();
  }

  isEmpty() {
    return this.nodes.length <= 0;
  }
}

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
