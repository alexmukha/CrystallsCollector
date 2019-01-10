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

        // Function to shuffle jewels array
        function shuffle(array) {
            var temp;
            var i = array.length
            while (i) {
                var m = Math.floor(Math.random() * i--);
                temp = array[i];
                array[i] = array[m];
                array[m] = temp;
            };
            return array;
        };
        var gems = shuffle(jewels); // Shuffle gem order

        var gem1 = gems[0];
        $("#gem1").html("<img src=\"./assets/images/" + gem1 + ".png\" alt=\"First Crystal\" title=\"" + gem1 + "\">");


    function calculate() {
        if (randomNum === totalScore) {
            wins++;
            $("#wins").text(wins);
            totalScore = 0;
            randoms = [];
            play()

        }


    }

    $("#gem1").on("click", function () {
        totalScore = (randoms[0] + totalScore);
        console.log("Gem1 clicked");
        calculate();
    })
    
    play();

});