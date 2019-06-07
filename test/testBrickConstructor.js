var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

var headBrick = new Brick(4, 'blue');

describe('Brick', function(){
  /**color is blue*/
  it('Should be a blue color', function() {
    assert.equal('blue', headBrick.color);
  });
});
