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

var bstLeft = new BST();
var brick1 = new Brick(2, 'blue');

describe('Add brick0 and brick1 to BST2', function(){
  /**root plus a left child*/
  it('brick1 should have same data as left child of root', function() {
    bstLeft.insert(brick0);
    bstLeft.insert(brick1);
    assert.equal(bstLeft.root.left.data, brick1);
  });
});

var bstRight = new BST();
var brick2 = new Brick(5, 'blue');
describe('Add brick0 and brick2 to BST', function(){
  /**root plus a right child*/
  it('brick2 should have same data as right child of root', function() {
    bstRight.insert(brick0);
    bstRight.insert(brick2);
    assert.equal(bstRight.root.right.data, brick2);
  });
});
 
var bstLeftRight = new BST();
describe('Add brick0, brick1 and brick2 to BST', function(){
  /**root plus a left and right child*/
  it('brick1 and brick2 should have same data as left and right child of root', function() {
    bstLeftRight.insert(brick0);
    bstLeftRight.insert(brick1);
    bstLeftRight.insert(brick2);
    assert.equal(bstLeftRight.root.left.data, brick1);
    assert.equal(bstLeftRight.root.right.data, brick2);
  });
});


var bstGeneralCase = new BST();
var brick24 = new Brick(24, 'blue');
var brick10 = new Brick(10, 'blue');
var brick30 = new Brick(30, 'blue');
var brick5 = new Brick(5, 'blue');
var brick12 = new Brick(12, 'blue');
var brick27 = new Brick(27, 'blue');
var brick50 = new Brick(50, 'blue');
describe('A general case of 7 nodes to BST', function(){
  /**test position of 7 bricks in BST*/
  it('Should be all located in the appropriate nodes', function() {
    bstGeneralCase.insert(brick24);
    bstGeneralCase.insert(brick10);
    bstGeneralCase.insert(brick30);
    bstGeneralCase.insert(brick5);
    bstGeneralCase.insert(brick12);
    bstGeneralCase.insert(brick27);
    bstGeneralCase.insert(brick50);
    assert.equal(bstGeneralCase.root.data, brick24);
    assert.equal(bstGeneralCase.root.left.data, brick10);
    assert.equal(bstGeneralCase.root.right.data, brick30);
    assert.equal(bstGeneralCase.root.left.left.data, brick5);
    assert.equal(bstGeneralCase.root.left.right.data, brick12);
    assert.equal(bstGeneralCase.root.right.left.data, brick27);
    assert.equal(bstGeneralCase.root.right.right.data, brick50);
  });
});


