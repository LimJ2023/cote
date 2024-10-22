//배열로 큐 만드는법

const q = [];
q.push("first");
q.push("second");
q.push("third");
q.shift();
q.shift();
//or
q.shift("first");
q.shift("second");
q.shift("third");
q.pop();

//연결리스트로 큐 작성하기
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    else {
      const temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  }
}
