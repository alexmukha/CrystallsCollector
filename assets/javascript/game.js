$(document).ready(function () { 

    var jewels = ["blue", "green", "yellow", "pink"];
    var wins = 0;
    var losses = 0;
    var randomNum = 0;
    var totalScore = 0;
    var randoms = [];

    function play() {
        randomNum = 19 + Math.floor(Math.random() * 102);
        $("#rNumber").text(randomNum);
    }






    
    play();

});