$(document).ready(function () {
    var userScore = 0
    var wins = 0;
    var losses = 0;

    // define the random # for every crystal
    var computerNum = Math.floor(Math.random() * 101 + 19);
    $(".comp-num").text(computerNum);


    var imgButtons = $('.gemButton');

    for (var button of imgButtons) {
        $(button).attr('data-value', Math.floor(Math.random() * 11 + 1))
    }

    // reset game
    function resetGame() {
        userScore = 0;
        computerNum = Math.floor(Math.random() * 101 + 19);
        $(".score").text(userScore);
        $(".comp-num").text(computerNum);
        for (var button of imgButtons) {
            $(button).attr('data-value', Math.floor(Math.random() * 11 + 1))
        }
    }
    //listening for clicks
    $(".gemButton").on("click", function () {
        console.log($(this).attr('data-value'))
        userScore = userScore + +$(this).attr('data-value')
        $(".score").text(userScore);

        if (userScore === computerNum) {
            wins++;
            $(".wins").text(wins);
            resetGame();
        } else if (userScore > computerNum) {
            losses++;
            $(".losses").text(losses);
            resetGame();
        }
    });

});