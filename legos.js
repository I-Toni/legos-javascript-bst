module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;
var bst = require('./bst');
const BST = bst.BST;


function Brick(size, color) {
  this.size = size;
  this.color = color;
}


/**Defined LegoPile insert method below*/
function LegoPile() {
  this.dict = {
    "red" : new BST(),
    "green" : new BST(),
    "blue" : new BST(),
    "yellow" : new BST(),
    "black" : new BST(),
    "white" : new BST(),
  };
  this.insert = function(brick){
    for (var key in this.dict) {
      if (brick.color === key) {
        this.dict[key].insert(brick);
        break;
      }
    }
   };
   this.hasBrick = hasBrick;
}

function hasBrick(brick) {
  for (var key in this.dict) {
    if (brick.color === key) {
      if (brick === this.dict[key].find(brick).data) {
        return true;
      }
    }
  }
  return false;
}



