$(document).ready(function() { // Document.ready.start
var jewels = ["blue","green","yellow","pink"];
var wins = "";
var losses = "";
var randomNum = "";
var randoms = [];
var random1 = "";

function game() {
    var random1 = Math.floor(Math.random()*102)+19;
    // for(var i = 0; i < 4; i++) {
        // var jewelRandom = 1 + Math.floor(Math.random() * 12);
        // var jewels = $("#jewels");
        // $("#jewels").append(jewels);
        // console.log(jewelRandom);
    // };
for (var i = 0; i < jewels.length; i++) {
    console.log(jewels[i]);
}
// console.log(jewels[i]);
console.log(random1);

}

game();

}); // Document.ready.end