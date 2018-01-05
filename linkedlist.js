
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  hasNext() {
    return this.next !== null;
  }

  hasPrev() {
    return this.prev !== null;
  }

  advanceNode(numOfTimes) {
    let node = this;
    for (let i = 0; i < numOfTimes; i++) {
      node = node.next;
    }
    return node;
  }

  connect(nodeTo) {
    this.next = nodeTo;
    if (nodeTo) {
      nodeTo.prev = this;
    }
  }

  disconnect() {
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    

  }

  isEmpty() {
    return this.head === null;
  }

  append(data) {
    const newNode = new Node(data);

    // remember node class has data, previous and next
    
    if (this.isEmpty()) {
      this.head = this.tail = newNode;

    } else {
      // go through the list and find tail
      let node = this.head;
      while (node.hasNext()) {
        node = node.next;
      }
      node.connect(newNode);
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.connect(this.head);
    this.head = newNode;
    
    this.length++;
  }

  insert(position, data) {
    if (position === 0) {
      // same as prepend when position is 0
      this.prepend(data);
    } else if (position >= this.length) {
      this.append(data);
    } else {
      // find the node before position
      const node = this.head.advanceNode(position - 1);
      const nextNode = node.next;
      const newNode = new Node(data);
      // before: node => nextNode
      // after: node => newNode => nextNode
      node.connect(newNode);
      newNode.connect(nextNode);
      
    }

    this.length++;
  }

  delete(position) {
    if (!this.isEmpty()) {
      // if removing head
      if (position === 0) {
        const firstNode = this.head;
        this.head = firstNode.next;
        firstNode.next = null;

      }else if (position === this.length - 1) {
        const lastNode = this.tail;
        this.tail = lastNode.prev;
        lastNode.disconnect();

      } else if (position >= this.length) {
        // position is outside of linkedlist, do nothing
        console.error('Position is out of range. Nothing to delete.');
      } else {
        const node = this.head.advanceNode(position - 1);
        const nodeNext = node.next;
        const nodeNextNext = node.next.next;
        node.connect(nodeNextNext);
        nodeNext.disconnect();
      }
    }

    this.length--;
  }

  find(data) {
    if (this.isEmpty()) {
      return -1;
    }

    let node = this.head;
    for (let index = 0; node !== null; index++) {
      if (node.data === data) {
        return index;
      }
      node = node.next;
    }

    // cannot find
    return -1;
  }

  printList() {
    if (this.isEmpty()) {
      console.log('list is empty');

    } else {
      let output = '';
      let node = this.head;

      while (node.hasNext()) {
        output += node.data + ', ';
        node = node.next;
      }
      // connect(nodeTo) {
      //   this.next = nodeTo;
      //   if (nodeTo) {
      //     nodeTo.prev = this;
      //   }
      // }
      // At the end of loop, node is tail, so
      // it doesn't have next, so output doesn't have it,
      // so add the data for tail here
      output += node.data;

      console.log('list data: ' + output);
    }
  }
}

function test() {
  const list = new LinkedList();
  list.printList();
  for (var i = 0; i < 5; i++) {
    list.append(i);
  }
  list.printList(); // list = 0, 1, 2, 3, 4

  list.prepend(9);
  list.printList(); // list = 9, 0, 1, 2, 3, 4

  list.insert(2, 10);
  list.printList(); // list = 9, 0, 10, 1, 2, 3, 4

  list.delete(2);
  list.printList(); // list = 9, 0, 1, 2, 3, 4

  let index = list.find(3);
  console.log(index); // 4
  index = list.find(999);
  console.log(index); // -1
}
// test();

export default LinkedList;
