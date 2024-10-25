class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contain(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.right) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    const data = [];
    const queue = [];
    var node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSpreOrder() {
    const data = [];
    const current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSpostOrder() {
    const data = [];
    const current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  myDFSpreOrder() {
    //깊이 우선 탐색, 전위
    const data = [];
    const current = this.root;

    function preOrder(node) {
      data.push(node.value);
      if (node.left) preOrder(node.left);
      if (node.right) preOrder(node.right);
    }
    preOrder(current);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);

// function myBFS() {
//   //큐를 만들기
//   const queue = [];
//   const visited = [];
//   //루트를 큐에 넣는다 큐에 무언가 있다면, 루프함.
//   let root = tree.root;
//   queue.push(root);
//   while (true) {
//     if (queue.length === 0) break;

//     const dequeueNode = queue.shift();
//     visited.push(dequeueNode);
//     if (dequeueNode.left !== null) {
//       queue.push(dequeueNode.left);
//     }
//     if (dequeueNode.right !== null) {
//       queue.push(dequeueNode.right);
//     }
//   }
//   //마지막에 배열 반환
//   return visited;
// }
