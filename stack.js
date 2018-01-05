import LinkedList from './linkedlist';

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(data) {
    this.linkedList.push(data);
  }

  pop() {
    return this.linkedList.delete(this.linkedList.length - 1);
  }

  peek() {
    return this.linkedList.tail.data;
  }

  size() {
    return this.linkedList.length;
  }
}
