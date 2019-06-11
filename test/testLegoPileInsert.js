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

var legoPile2 = new LegoPile();
var brick10 = new Brick(4, 'red');
var brick1 = new Brick(4, 'green');
var brick2 = new Brick(4, 'blue');
var brick3 = new Brick(4, 'yellow');
var brick4 = new Brick(4, 'black');
var brick5 = new Brick(4, 'white');
describe('Insert one brick of each color into the appropriate BST', function(){
  it('brick10, brick1, brick2, brick3, brick4, brick5 should have same data as root of red,green, blue, yellow, black, and white dictionary key,respectively.', function() {
    legoPile2.insert(brick10);
    legoPile2.insert(brick1);
    legoPile2.insert(brick2);
    legoPile2.insert(brick3);
    legoPile2.insert(brick4);
    legoPile2.insert(brick5);
    assert.equal(legoPile2.dict["red"].root.data, brick10);
    assert.equal(legoPile2.dict["green"].root.data, brick1);
    assert.equal(legoPile2.dict["blue"].root.data, brick2);
    assert.equal(legoPile2.dict["yellow"].root.data, brick3);
    assert.equal(legoPile2.dict["black"].root.data, brick4);
    assert.equal(legoPile2.dict["white"].root.data, brick5);
  });
});
