var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;



/**Add root*/
var bst = new BST();
var brick0 = new Brick(4, 'blue');
describe('Add root (brick0) to BST', function(){
  it('brick0 should have same data as root', function() {
    bst.insert(brick0);
    assert.equal(bst.root.data, brick0);
  });
});

/**root plus a left child*/
var bstLeft = new BST();
var brick1 = new Brick(2, 'blue');
describe('Add root plus a left child (brick0 and brick1 to BST2)', function(){
  it('brick1 should have same data as left child of root', function() {
    bstLeft.insert(brick0);
    bstLeft.insert(brick1);
    assert.equal(bstLeft.root.left.data, brick1);
  });
});

/**root plus a right child*/
var bstRight = new BST();
var brick2 = new Brick(5, 'blue');
describe('Add root plus a right child (brick0 and brick2 to BST)', function(){
  it('brick2 should have same data as right child of root', function() {
    bstRight.insert(brick0);
    bstRight.insert(brick2);
    assert.equal(bstRight.root.right.data, brick2);
  });
});
 
/**root plus a left and right child*/
var bstLeftRight = new BST();
describe('Add root plus a left and right child (brick0, brick1 and brick2 to BST)', function(){
  it('brick1 should have same data as left child of root', function() {
    bstLeftRight.insert(brick0);
    bstLeftRight.insert(brick1);
    assert.equal(bstLeftRight.root.left.data, brick1);
  });
  it('brick2 should have same data as right child of root', function() {
    bstLeftRight.insert(brick2);
    assert.equal(bstLeftRight.root.right.data, brick2);
  });
});

/**test position of 7 bricks in BST*/
var bstGeneralCase = new BST();
var brick24 = new Brick(24, 'blue');
var brick10 = new Brick(10, 'blue');
var brick30 = new Brick(30, 'blue');
var brick5 = new Brick(5, 'blue');
var brick12 = new Brick(12, 'blue');
var brick27 = new Brick(27, 'blue');
var brick50 = new Brick(50, 'blue');
describe('Add a general case of 7 nodes to BST', function(){
  it('Should add first brick as root', function() {
    bstGeneralCase.insert(brick24);
    assert.equal(bstGeneralCase.root.data, brick24);
  });
  it('Should add second brick as root left data', function() {
    bstGeneralCase.insert(brick10);
    assert.equal(bstGeneralCase.root.left.data, brick10);
  });
  it('Should add third brick as root right data', function() {
    bstGeneralCase.insert(brick30);
    assert.equal(bstGeneralCase.root.right.data, brick30);
  });
  it('Should add fourth brick as root left left data', function() {
    bstGeneralCase.insert(brick5);
    assert.equal(bstGeneralCase.root.left.left.data, brick5);
  });
  it('Should add fifth brick as root left right data', function() {
    bstGeneralCase.insert(brick12);
    assert.equal(bstGeneralCase.root.left.right.data, brick12);
  });
  it('Should add sixth brick as root right left data', function() {
    bstGeneralCase.insert(brick27);
    assert.equal(bstGeneralCase.root.right.left.data, brick27);
  });
  it('Should add seventh brick as root right right data', function() {
    bstGeneralCase.insert(brick50);
    assert.equal(bstGeneralCase.root.right.right.data, brick50);
  });
});


