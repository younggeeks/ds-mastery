export type TraversalCallback = (value: any) => void;

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
}