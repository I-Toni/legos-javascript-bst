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
