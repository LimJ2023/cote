class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    const popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }
    this.length--;
    return popedNode;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count != idx) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count != idx) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(idx, val) {
    const foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (afterNode.prev = newNode), (newNode.next = afterNode);

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

//내가 만든 pop
// mypop() {
//   if (!this.head) {
//     return undefined;
//   }
//   let oldTail = this.tail;
//   oldTail.prev = null;
//   let curTail = oldTail.prev;
//   curTail.next = null;
//   this.length--;
//   if (this.length === 0) {
//     this.head = null;
//     this.tail = null;
//   }
//   return oldTail;
// }
//내가 만든 shift
// myshift() {
//   if (!this.head) {
//     return undefined;
//   }
//   const oldHead = this.head;
//   this.head = oldHead.next;
//   if (this.length === 1) {
//     this.head = null;
//     this.tail = null;
//   }
//   this.head.prev = null;
//   oldHead.next = null;
//   this.length--;
//   return oldHead;
// }

// myunshift(val) {
//   const newNode = new Node(val);
//   if (this.length === 0) {
//     this.push(newNode);
//   } else {
//     oldHead = this.head;
//     newNode.next = oldHead;
//     this.head = newNode;
//   }
//   this.length++;
//   return this;
// }
// myGet(val) {
//   if (val < 0 || val >= this.length) return null;
//   if (val <= this.length / 2) {
//     let curNode = this.head;
//     for (let i = 0; i < val; i++) {
//       curNode = curNode.next;
//     }
//     return curNode;
//   } else {
//     let curNode = this.tail;
//     for (let i = this.length - 1; i > val; i--) {
//       curNode = curNode.prev;
//     }
//     return curNode;
//   }
// }
//내가 만든 insert
// myinsert(idx, val) {
//   if (idx < 0 || idx > this.length) return false;
//   if (idx == 0) this.unshift(val);
//   if (idx == this.length) this.push(val);
//   let prev = get(idx - 1);
//   let next = prev.next;
//   let newNode = new Node(val);
//   prev.next = newNode;
//   newNode.prev = prev;
//   next.prev = newNode;
//   newNode.next = next;
//   this.length++;
//   return true;
// }
