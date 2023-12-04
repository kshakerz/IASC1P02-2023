//load sound effects
let sfxgift = new Audio('Audio/gift.ogg'); //declare audio
let sfxfail = new Audio('Audio/fail.ogg'); //declare audio
let sfxgoblin = new Audio('Audio/goblin.ogg'); //declare audio
console.log("sound effects loaded");

//A Function to replace the closed gift image with the gift if pass is correct
function pushMe(){
	console.log("button pushed");
	var pass = document.getElementById("pass").value; //Pass string is called
	if (pass==3722) {	//if correct answer 3722 entered
		document.getElementById("output").src="Images/monkey.jpeg";	//replace gift with monkey
		document.getElementById("tryagain").innerHTML="Merry Christmas!!!"; //replace instructions with congratulatory text
		sfxgift.play();	//win sfx plays
		console.log("correct code entered");
	}
	else {	//if anything else entered
		document.getElementById("output").src="Images/gift.png";	//gift image stays same
		document.getElementById("tryagain").innerHTML="Try Again"; //replace instructions with try again prompt
		sfxgift.pause();	//win sfx pauses if playing already
		sfxfail.play();	//fail sfx plays
		console.log("wrong code entered");
	}
}

//Function to open Goblin Game
function goblinLink(){
	console.log("button pushed to open goblin game");
	window.open("finalproject2.html");	//open url
}

//Functions for Goblin Game text appearing
function showSecretText(){
	console.log("element hovered over and sound played");
	document.getElementById("secretText").style.display="block"; //show text
	sfxgoblin.play();	//goblin sfx plays
}

function hideSecretText(){
	document.getElementById("secretText").style.display="none"; //hide text
}

//Function to open Top 5 List
function listLink(){
	console.log("button pushed to open list");
	window.open("finalproject3.html"); //open url
}

//Calculator function for adding code halves together
function add(){
	var num1 = document.getElementById("n1").value; //String of Number 1 called

	var num2 = document.getElementById("n2").value; //String of Number 2 called

	var sum = Number(num1)+Number(num2); //sum variable created, strings turned into numbers

	if (sum==3722) { //if correct code
		document.getElementById("output").innerHTML=sum+"!...&nbsp"+"Congratulations! You found the code!"; //display sum and congrats message
		sfxgoblin.play();	//goblin sfx plays
		console.log(`correct code and the sum of the values is ${sum}`);
	}
	else { //else aka incorrect code
		document.getElementById("output").innerHTML=sum+"...&nbsp"+"This is incorrect!"; //display sum and fail message
		sfxfail.play();	//fail sfx plays
		console.log(`incorrect code and the sum of the values is ${sum}`);
	}
}
