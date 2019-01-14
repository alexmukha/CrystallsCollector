$(document).ready(function() { // Document.ready.start
var jewels = ["blue","green","yellow","pink"];
var wins = "";
var losses = "";
var randomNum = "";
var randoms = [];
var random1 = "";
var randomsGem = [];


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
var gems = shuffle(jewels);
console.log(gems);
for (var i = 0; i < gems.length; i++) {
// console.log(gems[i]+" "+jewels[i]);
var randomGem = 1 + Math.floor(Math.random() * 12);
// var randomsGem = randomGem.join(",");
randomsGem.push(randomGem);

}
// console.log(randomsGem);
var gem1 = gems[0];
console.log(gems[0]+" "+randomsGem[0]);
var gem2 = gems[1];
console.log(gems[1]+" "+randomsGem[1]);
var gem3 = gems[2];
console.log(gems[2]+" "+randomsGem[2]);
var gem4 = gems[3];
console.log(gems[3]+" "+randomsGem[3]);
$("#gem1").html("<img src=\"./assets/images/"+gem1+".png\" alt=\"First Crystal\" title=\""+gem1+"\">");
$("#gem2").html("<img src=\"./assets/images/"+gem2+".png\" alt=\"First Crystal\" title=\""+gem2+"\">");
$("#gem3").html("<img src=\"./assets/images/"+gem3+".png\" alt=\"First Crystal\" title=\""+gem3+"\">");
$("#gem4").html("<img src=\"./assets/images/"+gem4+".png\" alt=\"First Crystal\" title=\""+gem4+"\">");

function game() {
    var random1 = Math.floor(Math.random()*102)+19;

console.log(random1);


// jewels.forEach(function(gem) {
// randomGem = Math.floor(Math.random() * jewels.length);
// console.log(randomGem);
// });

/*
var randomgem = Math.floor(Math.random()*jewels.length);
console.log(randomgem);

jewels.forEach(function(gem) {
    console.log(gem);
    
  }); */

// console.log(jewels[i]);
// console.log(random1);

}

game();

}); // Document.ready.end