import { DoublyLinkedList } from '../structures/doubly-linked-list';

describe('The doubly linked list structure', () => {
  let doublyLinkedList: DoublyLinkedList<any>;

  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should add a node successfully', () => {
    doublyLinkedList.add(1);

    const list = doublyLinkedList.toArray();

    expect(list.length).toEqual(1);
    expect(list[0]).toEqual(1);
  });

  it('should remove a node successfully', () => {
    doublyLinkedList.add(1);
    doublyLinkedList.add(2);
    
    const array = doublyLinkedList.toArray();

    expect(array.length).toEqual(2);

    doublyLinkedList.remove(1);

    expect(doublyLinkedList.toArray().length).toEqual(1);
  });

  it('should add nodes in proper order', () => {
    doublyLinkedList.add(1);
    doublyLinkedList.add(2);
    doublyLinkedList.add(3);

    const listArray = doublyLinkedList.toArray();

    expect(listArray).toEqual([3,2,1]);
  });

  it('should properly remove nodes in the middle', () => {
    doublyLinkedList.add(1);
    doublyLinkedList.add(2);
    doublyLinkedList.add(3);

    doublyLinkedList.remove(2);
  
    const listArray = doublyLinkedList.toArray();

    expect(listArray.length).toEqual(2);
    expect(listArray).toEqual([3,1]);
  });

  it('should throw error when removing a node from empty list', () => {
    const expectedError = 'linked list is empty please add more values'

    try {
      expect(doublyLinkedList.remove(1)).toThrowError(expectedError);
    } catch (error) {
      expect(error.message).toEqual(expectedError);
    }
  });

  it('should throw error when removing an non-existent node a list', () => {
    const value = 3

    doublyLinkedList.add(1);
    doublyLinkedList.add(2);

    const expectedError = `value ${value} is not in the list`

    try {
      expect(doublyLinkedList.remove(value)).toThrowError(expectedError);
    } catch (error) {
      expect(error.message).toEqual(expectedError);
    }
  });
});
