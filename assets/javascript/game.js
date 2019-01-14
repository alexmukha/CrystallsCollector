$(document).ready(function() { // Document.ready.start

var jewels = ["blue","green","yellow","pink"]; 
var wins = 0;
var losses = 0;
var randomNum = 0;
var totalScore = 0;
var randoms = [];
var randomsGem = [];
var playing = false;



function play() {
    randomNum = 19+Math.floor(Math.random()*102);
    $("#rNumber").text(randomNum);
    
// Function to shuffle jewels array
function shuffle(array){
    var temp;
    var i = array.length
    while(i){
    var m = Math.floor(Math.random()* i--);
    temp = array[i];
    array[i] = array[m];
    array[m] = temp;
    };
    return array;
    };
    var gems = shuffle(jewels); // Shuffle gem order
    
    // Generating a random number for each jewel
    for (var i = 0; i < gems.length; i++) {
    var randomGem = 1 + Math.floor(Math.random() * 12);
    randoms.push(randomGem); // Creating an array with 4 random numbers for each jewel
    }
    var gem1 = gems[0];
    var gem2 = gems[1];
    var gem3 = gems[2];
    var gem4 = gems[3];
    $("#gem1").html("<img src=\"./assets/images/"+gem1+".png\" alt=\"First Crystal\" title=\""+gem1+"\">");
    $("#gem2").html("<img src=\"./assets/images/"+gem2+".png\" alt=\"First Crystal\" title=\""+gem2+"\">");
    $("#gem3").html("<img src=\"./assets/images/"+gem3+".png\" alt=\"First Crystal\" title=\""+gem3+"\">");
    $("#gem4").html("<img src=\"./assets/images/"+gem4+".png\" alt=\"First Crystal\" title=\""+gem4+"\">");
}

function calculate() {
if (randomNum === totalScore) {
    wins++;
    $("#wins").text(wins);
    totalScore = 0;
    randoms = [];
    play()
    
} else if (randomNum > totalScore) {
    console.log("Keep playing");
} else {
    losses++;
    $("#losses").text(losses);
    totalScore = 0;
    randoms = [];
    play()
}
$("#rNumber").text(randomNum);
$("#guess").text(totalScore);
}

$("#gem1").on("click", function() {
    totalScore = (randoms[0]+totalScore);
calculate();
})
$("#gem2").on("click", function() {
    totalScore = (randoms[1]+totalScore);
    calculate();
})
$("#gem3").on("click", function() {
    totalScore = (randoms[2]+totalScore);
    calculate();
})
$("#gem4").on("click", function() {
    totalScore = (randoms[3]+totalScore);
    calculate();
})

play();

}); // Document.ready.end