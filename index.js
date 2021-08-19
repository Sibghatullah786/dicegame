var player2Name=prompt("Enter Your Name. Lets Play Dice Game.");
 var player2Name=player2Name.slice(0,1).toUpperCase() +player2Name.slice(1,player2Name.length).toLowerCase();

 // Changing player2 Name
 document.querySelectorAll("P")[1].innerHTML=player2Name;

var randomNumber1=Math.floor(Math.random()*6+1);
var randomImage1="dice" +randomNumber1 +".png";
var randomImage1Source="images/" +randomImage1;
document.querySelectorAll("img")[0].setAttribute("src",randomImage1Source);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomImage2="dice" +randomNumber2 +".png";
var randomImage2Source="images/" +randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImage2Source);

// Conditional Statements
if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="Sibghatullah Wins😁..";
}else if(randomNumber1===randomNumber2){
	document.querySelector("h1").innerHTML="Match Draw.Refresh Page🏁.."
}else{
	document.querySelector("h1").innerHTML= player2Name +" Wins🚩.."
}