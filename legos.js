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
   this.count = {
    var totalBricks = 0;
    for (var key in this.dict) {
      total += this.dict[key].count;
    }
    return total;
   };
}

function hasBrick(brick) {
  for (var key in this.dict) {
    if (brick.color === key) {
      if (this.dict[key].find(brick) === null) {
        return false;
      } else if (brick === this.dict[key].find(brick).data) {
        return true;
      }
    }
  }
  return false;
}



