export interface LinkedListNode<T> {
  tail?: LinkedListNode<T>;
  value: T;
}

export class LinkedList<T> {
  head?: LinkedListNode<T>;

  constructor() {};

  add(value: T) {
    const node: LinkedListNode<T> = {
      value,
      tail: this.head ? { ...this.head } : undefined
    }

    this.head = node;
  }

  remove(value: T) {
    let currentNode = this.head;
    let previousNode: LinkedListNode<T> | undefined;

    let isDone = false;

    if (!currentNode) {
      throw new Error('linked list is empty please add more values');
    }

    while (!isDone) {
      if (!currentNode.tail) {
        if (currentNode.value === value) {
          if (previousNode) {
            previousNode.tail = undefined;
          }
          
          isDone = true;
        } else {
          throw new Error(`value ${value} is not in the list`);
        }
      } else {
        if (currentNode.value === value) {
          if (previousNode) {
            previousNode.tail = currentNode.tail;
          } else {
            this.head = currentNode.tail;
          }
          
          isDone = true;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.tail;
        }
      }
    }
  }

  toArray(): T[] {
    if (!this.head) {
      return [];
    }

    return this.convertLinkedListToArray(this.head);
  }

  private convertLinkedListToArray(node: LinkedListNode<T>) {
    let isDone = false;
    let currentNode: LinkedListNode<T> = node;
    let convertedArray: T[] = [];

    while(!isDone) {
      if (!currentNode.tail) {
        convertedArray =  [...convertedArray, currentNode.value];
        isDone = true;
      } else {
        convertedArray = [...convertedArray, currentNode.value];
        currentNode = currentNode.tail;
      }
    }

    return convertedArray;
  }
}