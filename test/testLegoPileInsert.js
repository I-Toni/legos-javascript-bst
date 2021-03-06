var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;


var legoPile = new LegoPile();
var brick0 = new Brick(4, 'blue');
describe('Insert one brick into the Appropriate BST', function(){
  it('brick0 should have same data as root of blue dictionary key', function() {
    legoPile.insert(brick0);
    assert.equal(legoPile.dict["blue"].root.data, brick0);
  });
});

/**Insert one brick of each into BST*/
var legoPile2 = new LegoPile();
var brick10 = new Brick(4, 'red');
var brick1 = new Brick(4, 'green');
var brick2 = new Brick(4, 'blue');
var brick3 = new Brick(4, 'yellow');
var brick4 = new Brick(4, 'black');
var brick5 = new Brick(4, 'white');
describe('Insert one brick of each color into the appropriate BST', function(){
  it('Should have red brick as root of red BST', function() {
    legoPile2.insert(brick10);
    assert.equal(legoPile2.dict["red"].root.data, brick10);
  });
  it('Should have green brick as root of green BST', function() {
    legoPile2.insert(brick1);
    assert.equal(legoPile2.dict["green"].root.data, brick1);
  });
  it('Should have blue brick as root of blue BST', function() {
  legoPile2.insert(brick2);
    assert.equal(legoPile2.dict["blue"].root.data, brick2);
  });
  it('Should have yellow brick as root of yellow BST', function() {
    legoPile2.insert(brick3);
    assert.equal(legoPile2.dict["yellow"].root.data, brick3);
  });
  it('Should have black brick as root of black BST', function() {
    legoPile2.insert(brick4);
    assert.equal(legoPile2.dict["black"].root.data, brick4);
  });
  it('Should have white brick as root of white BST', function() {
    legoPile2.insert(brick5);
    assert.equal(legoPile2.dict["white"].root.data, brick5);
  });
});

/**Insert several bricks of red color into BST*/
var legoPile3 = new LegoPile();
var brick100 = new Brick(4, 'red');
var brick200 = new Brick(3, 'red');
var brick300 = new Brick(5, 'red');
describe('Insert several bricks of red into the appropriate BST', function(){
  it('should be root of red', function() {
    legoPile3.insert(brick100);
    assert.equal(legoPile3.dict["red"].root.data, brick100);
  });
  it('should be in left node of root', function() {
    legoPile3.insert(brick200);
    assert.equal(legoPile3.dict["red"].root.left.data, brick200);
  });
  it('should be in right node of root', function() {
    legoPile3.insert(brick300);
    assert.equal(legoPile3.dict["red"].root.right.data, brick300);
  });
});

/**hasBrick test to find out if LegoPile contains a certain kind of brick*/
describe('Test to return True if Brick in LegoPile, and false otherwise', function(){
  it('(brick100) should be in legoPile and hasBrick should return true ', function() {
    assert.equal(legoPile3.hasBrick(brick100), true);
  });
  it('(brick123) should be not be in legoPile and hasBrick should return false ', function() {
    var brick123 = new Brick(5, 'red');
    assert.equal(legoPile3.hasBrick(brick123), false);
  });
});

/**Test BST#count returns the number of node objects in the BST*/
var allBricks = new BST();
var brick1000 = new Brick(5, 'blue');
var brick2000 = new Brick(3, 'blue');
var brick3000 = new Brick(6, 'blue');
var brick4000 = new Brick(2, 'red');
var brick5000 = new Brick(4, 'green');
var brick6000 = new Brick(7, 'white');
var brick7000 = new Brick(9, 'white');
describe('Test BST count returns appropriate number of node objects in BST', function(){
  it('Should return 7 after inserting 7 bricks', function() {
    allBricks.insert(brick1000);
    allBricks.insert(brick2000);
    allBricks.insert(brick3000);
    allBricks.insert(brick4000);
    allBricks.insert(brick5000);
    allBricks.insert(brick6000);
    allBricks.insert(brick7000);
    assert.equal(allBricks.count(), 7);
  });
});


/**Test LegoPile#count returns the total number of node objects in the legoPile*/
describe('Test LegoPile count returns appropriate total number of node objects in LegoPile', function(){
  it('(legoPile2) Should return 6 after inserting 6 bricks with different colors and calling count method', function() {
    assert.equal(legoPile2.count(), 6);
  });
  it('(legoPile3) Should return 3 after inserting 3 bricks with different colors and calling count method', function() {
    assert.equal(legoPile3.count(), 3);
  });
});


