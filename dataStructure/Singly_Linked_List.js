class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    var current = this.head;
    while (count !== idx) {
      current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var prev = this.get(index - 1);
    var temp = prev.next;
    var newNode = new Node(val);
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    var prevNode = this.get(index - 1);
    var removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  //내가 만든 리버스 코드
  myreverse() {
    var temp;
    temp = this.head.val;
    this.head.val = this.tail.val;
    this.tail.val = temp;

    const node = this.tail.next;
    const nextNode = node.next;
    const prevNode = this.tail;

    while (!nextNode) {
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
      nextNode = node.next;
    }
    return this;
  }
}
var list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!!");

// 내가 만든 단방향 연결 링크
// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     const node = new Node(val);
//     if (this.head == null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.length++;
//   }
// }
// var list = new SinglyLinkedList();
// list.push("hello");
// list.push("goodbye");

//내가만든 pop함수
// mypop() {
//   if (!this.head) {
//     console.log("리스트가 비었습니다.");
//     return undefined;
//   }

//   var cur = this.head;
//   var temp = cur.next;

//   while (temp.next != null) {
//     cur = temp;
//     temp = temp.next;
//   }
//   cur.next = null;
//   this.tail = cur;
//   this.length--;
//   return temp;
// }
//내가 만든 unshift()
// myunshift(node) {
//   if (!this.head) {
//     this.head = node;
//     this.tail = node;
//     this.length++;
//     return list;
//   }
//   node.next = this.head;
//   this.head = node;
//   this.length++;
//   return node;
// }
//내가만든 get함수 / 인덱스가 음수, 길이보다 같거나 클경우 return null;
//루프돌려서 인덱스 위치까지 반복한다음 위치에 있는 노드 반환
// myget(idx) {
//   if (idx < 0 || idx >= this.length) return null;
//   let count = 0;
//   var temp = this.head;
//   while (count < idx) {
//     temp = temp.next;
//     count++;
//   }
//   return temp;
// }
//내가 만든 set 함수
// myset(idx, val) {
//   node = this.get(idx);
//   if (!node) {
//     return false;
//   } else {
//     node.val = val;
//   }
//   return true;
// }
//내가 만든 인서트 코드
// myinsert(idx, val) {
//   if (idx < 0 || idx >= this.length) return false;
//   if (idx === this.length) {
//     this.push(val);
//   } else if (idx === 0) {
//     this.unshift(val);
//   } else {
//     const node = new Node(val);
//     const prev = this.get(idx - 1);
//     const aft = prev.next;
//     prev.next = node;
//     node.next = aft;
//     this.length++;
//   }
//   return true;
// }
//내가 만든 remove함수
// myremove(idx) {
//   if (idx < 0 || idx > this.length) return undefined;
//   if (idx === this.length - 1) this.pop();
//   if (idx === 0) this.shift();
//   var prev = this.get(idx - 1);
//   var temp = prev.next;
//   prev.next = prev.next.next;
//   this.length--;
//   return temp;
// }
