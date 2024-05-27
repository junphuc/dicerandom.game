
var randomNumber1 = Math.floor(( 6 * Math.random()) + 1);
var randomImages1 = "/images/dice" + randomNumber1 +".png"
document.querySelector(".img1").setAttribute("src",randomImages1);

var randomNumber2 = Math.floor(( 6 * Math.random()) + 1);
var randomImages2 = "/images/dice" + randomNumber2 +".png"
document.querySelector(".img2").setAttribute("src",randomImages2);

if (randomImages1 > randomImages2){
    document.querySelector("h1").innerHTML = ("🚩Player 1 Win!");
} else if (randomImages1 < randomImages2){
    document.querySelector("h1").innerHTML = ("Player 2 Win!🚩");
} else{
    document.querySelector("h1").innerHTML = ("🚩Draw!🚩");
}
