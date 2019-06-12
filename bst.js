module.exports.Node = Node;
module.exports.BST = BST;


function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.find = find;
  this.countSubtree = countSubtree;
  this.count = count;
  this.bricks = 0;
}

function countSubtree(node) {
  if (node !== null) {
    countSubtree(node.left);
    this.bricks++;
    countSubtree(node.right);
  }
}

function count() {
  this.countSubtree(this.root);
  return this.bricks;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data.size < current.data.size) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function find(data) {
  var current = this.root;
  while (current && current.data != data) {
    if (data.size < current.data.size) {
      current = current.left;
    }
    else {
      current = current.right;
    }
  }
  return current;
}
