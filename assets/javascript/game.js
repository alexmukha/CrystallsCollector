$(document).ready(function() { // Document.ready.start

var jewels = ["blue","green","yellow","pink"]; 
var wins = "";
var losses = "";
var randomNum = 0;
var totalScore = 0;
var randoms = [];
var random1 = "";
var randomsGem = [];
var playing = false;



function play() {
    randomNum = 19+Math.floor(Math.random()*102);
console.log("Random number - "+randomNum);

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
    // console.log(randomGem); // Each random number
    // console.log(gems); // Each random number
    // console.log(jewels); // Each random number
    // console.log(randomGem); // Each random number
    
    }
    // console.log(randoms[0]);
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

}

$("#gem1").on("click", function() {
    console.log("Gem 1 pressed");
    totalScore = (randoms[0]+totalScore);
    console.log(totalScore);

calculate();
    // console.log(totalScore);
})
$("#gem2").on("click", function() {
    console.log("Gem 2 pressed");
    totalScore = (randoms[1]+totalScore);
    console.log(totalScore);
})
$("#gem3").on("click", function() {
    console.log("Gem 3 pressed");
    totalScore = (randoms[2]+totalScore);
    console.log(totalScore);
})
$("#gem4").on("click", function() {
    console.log("Gem 4 pressed");
    totalScore = (randoms[3]+totalScore);
    console.log(totalScore);
})




play();

}); // Document.ready.end