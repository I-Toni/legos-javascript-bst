module.exports.Node = Node;
module.exports.BST2 = BST2;

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST2() {
  this.root = null;
  this.insert = insert;
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
