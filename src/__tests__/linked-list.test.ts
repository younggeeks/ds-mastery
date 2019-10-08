import { LinkedList } from '../structures/linked-list';

describe('The linked list structure', () => {
  let linkedList: LinkedList<any>;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should add a node successfully', () => {
    linkedList.add(1);
    expect(linkedList.toArray()[0]).toEqual(1);
  });

  it('should remove a node successfully', () => {
    linkedList.add(1);
    linkedList.add(2);
    
    const array = linkedList.toArray();

    expect(array.length).toEqual(2);

    linkedList.remove(1);

    expect(linkedList.toArray().length).toEqual(1);
  });

  it('should add nodes in proper order', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    const listArray = linkedList.toArray();

    expect(listArray).toEqual([3,2,1]);
  });

  it('should properly remove nodes in the middle', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    linkedList.remove(2);
  
    const listArray = linkedList.toArray();

    expect(listArray.length).toEqual(2);
    expect(listArray).toEqual([3,1]);
  });

  it('should throw error when removing a node from empty list', () => {
    const expectedError = 'linked list is empty please add more values'

    try {
      expect(linkedList.remove(1)).toThrowError(expectedError);
    } catch (error) {
      expect(error.message).toEqual(expectedError);
    }
  });

  it('should throw error when removing an non-existent node a list', () => {
    const value = 3

    linkedList.add(1);
    linkedList.add(2);

    const expectedError = `value ${value} is not in the list`

    try {
      expect(linkedList.remove(value)).toThrowError(expectedError);
    } catch (error) {
      expect(error.message).toEqual(expectedError);
    }
  });
})