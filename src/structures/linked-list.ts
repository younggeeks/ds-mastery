export interface LinkedListNode<T> {
  tail?: LinkedListNode<T>;
  value: T;
}

export class LinkedList<T> {
  private linkedList?: LinkedListNode<T>;

  constructor() {};

  add(value: T) {
    const node: LinkedListNode<T> = {
      value,
      tail: this.linkedList ? { ...this.linkedList } : undefined
    }

    this.linkedList = node;
  }

  remove(value: T) {
    let currentNode = this.linkedList;
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
            this.linkedList = currentNode.tail;
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
    if (!this.linkedList) {
      return [];
    }

    return this.convertLinkedListToArray(this.linkedList);
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