import { Queue } from "./structures";
import { TraversalCallback } from "./structures";
import { Stack } from "./structures";

export function bfs<T>(node: T, callback: TraversalCallback) {
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

export function dfs<T>(node: T, callback: TraversalCallback) {
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