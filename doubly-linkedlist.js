class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  _traverseToIndex(index) {
    let i = 0;
    let currentNode = this.head;
    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      return this.append(value);
    }
    const leader = this._traverseToIndex(index - 1);
    const follower = leader.next;
    newNode.next = follower;
    newNode.prev = leader;
    leader.next = newNode;
    follower.prev = newNode;
    this.length;
    return this.printList();
  }

  remove(index) {
    const leader = this._traverseToIndex(index - 1);
    const toBeRemoved = leader.next;
    leader.next = toBeRemoved.next;
    toBeRemoved.next.prev = leader;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(1);
console.log(myLinkedList.printList());
