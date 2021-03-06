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
  this.bricks = 0;
  this.find = find;
  this.countSubtree = function(node) {
    if (node !== null) {
      this.countSubtree(node.left);
      this.bricks++;
      this.countSubtree(node.right);
    } 
  };
  this.count = function() {
    this.countSubtree(this.root);
    return this.bricks;
  };
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
