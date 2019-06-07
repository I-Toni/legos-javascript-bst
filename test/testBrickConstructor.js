var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

var headBrick = new Brick(4, 'blue');

describe('HeadBrick Color and Size', function(){
  /**color is blue*/
  it('Should be a blue color', function() {
    assert.equal('blue', headBrick.color);
  });
  /**size is 4*/
  it('Should be size 4', function() {
    assert.equal(4, headBrick.size);
  });
});
