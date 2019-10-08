import {  LinkedListNode } from './linked-list';

export interface DoublyLinkedListNode<T> extends LinkedListNode<T> {
  head?: DoublyLinkedListNode<T>;
  tail?: DoublyLinkedListNode<T>;
}

export class DoublyLinkedList<T> {
  private doublyLinkedList?: DoublyLinkedListNode<T>;

  constructor() {}

  add(value: T) {
    if (!this.doublyLinkedList) {
      this.doublyLinkedList = {
        value,
        head: undefined,
        tail: undefined
      }
    } else {
      const temp = this.doublyLinkedList;

      const node = {
        value,
        head: undefined,
        tail: temp,
      }

      temp.head = node;

      this.doublyLinkedList = node;
    }
  }

  remove(value: T) {
    let currentNode = this.doublyLinkedList;
    let previousNode: DoublyLinkedListNode<T> | undefined;
    let nextNode: DoublyLinkedListNode<T> | undefined;

    let isDone = false;

    if (!currentNode) {
      throw new Error('linked list is empty please add more values');
    }

    while (!isDone) {
      if (!currentNode.tail) {
        if (currentNode.value === value) {
          if (previousNode) {
            previousNode.tail = nextNode;
          }

          if (nextNode) {
            nextNode.head = previousNode;
          }
          
          isDone = true;
        } else {
          throw new Error(`value ${value} is not in the list`);
        }
      } else {
        if (currentNode.value === value) {
          if (previousNode) {
            previousNode.tail = nextNode;
          } else {
            this.doublyLinkedList = currentNode.tail;
          }

          if (nextNode) {
            nextNode.head = previousNode;
          }
          
          isDone = true;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.tail;
          nextNode = currentNode.tail;
        }
      }
    }
  }

  toArray(): T[] {
    if (!this.doublyLinkedList) {
      return [];
    }

    return this.convertLinkedListToArray(this.doublyLinkedList);
  }

  private convertLinkedListToArray(node: DoublyLinkedListNode<T>) {
    let isDone = false;
    let currentNode: DoublyLinkedListNode<T> = node;
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