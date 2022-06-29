const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const finalPosition = function (moves) {
  // define x and y 
let x = 0;
let y = 0;
let fPosition = []
// loop moves 
for (let move of moves){
switch (move) {
case 'north':
   // add or substract depending on the case
      y += 1
     break;
     case 'south':
      y -= 1 
      break;
      case 'west':
        x -= 1
        break;
        case 'east':
          x += 1
          break;
  }
} fPosition.push(x);
fPosition.push(y);
return fPosition;
}
finalPosition(moves);