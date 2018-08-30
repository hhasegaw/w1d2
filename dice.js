
// dice has 6 numbers (1,2,3,4,5,6)
// show random numbers between 1 - 6
// number 0 should not be included
// if: Rolled 1 dice: show  1 number 
//            2 dices: show 2 numbers
//            3 dices:  show 3 numbers
//            4 dices:   show 4 numbers                 
// use Math.random

var diceRoller = function (num) {
 var results = [];
 for (let repeat = 0; repeat < num; repeat++) {
     results.push(parseInt(Math.random()*(7 - 1) + 1));     
}
console.log(results.join(', '));
}
var input  = process.argv.slice(2);
diceRoller(input);

