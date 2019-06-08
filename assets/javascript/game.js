$(document).ready(function(){


var score = 0;
var wins = 0;
var losses = 0;

// define the random # for every crystal
var computerNum = Math.floor(Math.random() * 101 + 19);
$(".score").text(computerNum);

var userScore = 0

var imgButtons = $('.gemButton');

for(var button of imgButtons){
    $(button).attr('data-value',Math.floor(Math.random() * 11 + 1))
}

// reset game
function resetGame() {
    userScore = 0;
    computerNum = Math.floor(Math.random() * 101 + 19);
}
//listening for clicks
$(".gemButton").on("click",function(){
    console.log($(this).attr('data-value'))
    userScore = userScore + +$(this).attr('data-value')
    console.log(userScore)
});

});