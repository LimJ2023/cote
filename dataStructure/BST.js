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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);

console.log(tree.insert(7));

// //내가 만든 인설트 함수
// myinsert(value) {
//   let node = new Node(value);
//   if (this.root === null) {
//     this.root = node;
//   } else {
//     let current = this.root;
//     //노드의 값이 더 작을때. 왼쪽으로 이동..
//     while (true) {
//       if (node.value < current.value) {
//         if (current.left === null) {
//           current.left = node;
//           return this;
//         } else {
//           current = current.left;
//         }
//         //노드의 값이 더 클 때. 오른쪽으로 이동.
//       } else if (node.value > current.value) {
//         if (current.right === null) {
//           current.right = node;
//           return this;
//         } else {
//           current = current.right;
//         }
//       }
//     }
//   }
//   return this;
// }
