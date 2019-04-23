
var score = 0;
var wins = 0;
var losses = 0;

// defiine the random # for every crystal
var computerNum = Math.floor(Math.random() * 101 + 19);
var randNum1 = Math.floor(Math.random() * 11 + 1);
var randNum2 = Math.floor(Math.random() * 11 + 1);
var randNum3 = Math.floor(Math.random() * 11 + 1);
var randNum4 = Math.floor(Math.random() * 11 + 1);

console.log(randNum1);
console.log(randNum3);
console.log(randNum2);
console.log(randNum4);



var targetNumber = Math.floor(Math.random() * 80) + 20;
console.log(targetNumber);

// reset game

function resetGame() {
    userNumber = 0;
    targetNumber = Math.floor(Math.random() * 80) + 20;

