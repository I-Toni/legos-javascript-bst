var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;


var bst = new BST();
var brick0 = new Brick(4, 'blue');
describe('Add brick0 to BST', function(){
  /**get BSTs root node via root field,
  then data field should be the same as the brick object
  */
  it('brick0 should have same data as root', function() {
    bst.insert(brick0);
    assert.equal(bst.root.data, brick0);
  });
});

var brick1 = new Brick(2, 'blue');

/**
describe('Add brick0 brick1 to BST', function(){
  /**root plus a left child
  it('brick0 should have same data as left child of root', function() {
    assert.equal(bst.root.left, brick1);
  });
});

var brick2 = new Brick(5, 'blue');
describe('Add brick0 and brick2 to BST', function(){
  /**root plus a right child
  it('brick2 should have same data as right child of root', function() {
    assert.equal(bst.root.right, brick2);
  });
});
 
describe('Add brick0, brick1 and brick2 to BST', function(){
  /**root plus a left and right child
  it('brick1 and brick2 should have same data as left and right child of root', function() {
    assert.equal(bst.root.left, brick1);
    assert.equal(bst.root.right, brick2);
  });
});

*/


