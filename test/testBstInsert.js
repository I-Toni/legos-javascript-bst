var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

var bst = new BST();
var brick0 = new Brick(4, 'blue');

bst.insert(brick0);
/**get BSTs root node via root field,
  then data field should be the same as the brick object
*/
describe('Add brick to BST', function(){
  /**4 as root node*/
  it('brick0 should have same data as root', function() {
    assert.equal(bst.root.data, brick0);
  });
});
