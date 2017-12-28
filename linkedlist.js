
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
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  append(data) {
    const newNode = new Node(data);

    // remember node class has data, previous and next
    
    if (this.isEmpty()) {
      this.head = newNode;

    } else {
      // go through the list and find tail
      let node = this.head;
      while (node.hasNext()) {
        node = node.next;
      }
      // at this time, node is tail
      node.next = newNode;
      newNode.prev = node;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    
  }

  insert(position, data) {
    if (position === 0) {
      // same as prepend when position is 0
      this.prepend(data);
    } else {
      // find the node before position
      let index = 0;
      let nodeB4Position = this.head;
      while (nodeB4Position.hasNext() && index < position) {
        nodeB4Position = nodeB4Position.next;
        index++;
      }

      while (nodeB4Position.hasNext()) {
        index++;
        if (index === position) {
          break;
        }
        nodeB4Position = nodeB4Position.next;
      }

      if (index < position) {
        // position is greater than length, just append to last
        this.append(data);
      } else {
        const newNode = new Node(data);
        newNode.next = nodeB4Position.next;
        nodeB4Position.next = newNode;
      }
    }
  }

  delete(position) {
    if (!this.isEmpty()) {
      // if removing head
      if (position === 0) {
        const firstNode = this.head;
        this.head = firstNode.next;
        firstNode.next = null;

      } else {
        // find the node before position
        let index = 0;
        let nodeB4Position = this.head;
        while (nodeB4Position.hasNext() && index < position - 1) {
          nodeB4Position = nodeB4Position.next;
          index++;
        }

        // found it, remove links
        if (index === position - 1) {
          const nodeToDelete = nodeB4Position.next;
          nodeB4Position.next = nodeToDelete.next;
          nodeToDelete.next = null;
        }
      }
    }
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
      // At the end of loop, node is tail, so
      // it doesn't have next, so output doesn't have it,
      // so add the data for tail here
      output += node.data;

      console.log('list data: ' + output);
    }
  }
}

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
