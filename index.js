var randomNumber1=Math.floor(Math.random()*6+1);
var dice1path="dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",dice1path);

var randomNumber2=Math.floor(Math.random()*6+1);
var dice2path="dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",dice2path);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}