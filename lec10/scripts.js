console.log("Page load began...");

function add(){
	var num1 = document.getElementById("n1").value; //String of Number 1 called
	console.log(num1+" is number 1");

	var num2 = document.getElementById("n2").value; //String of Number 2 called
	console.log(num2+" is number 2");

	var sum = Number(num1)+Number(num2); //sum variable created, strings turned into numbers
	console.log(`the sum of the values is ${sum}`);

	document.getElementById("output").innerHTML=sum; //display sum
}

function minus(){
	var num1 = document.getElementById("n1").value; //String of Number 1 called
	console.log(num1+" is number 1");

	var num2 = document.getElementById("n2").value; //String of Number 2 called
	console.log(num2+" is number 2");

	var diff = Number(num1)-Number(num2); //diff variable created, strings turned into numbers
	console.log(`the difference of the values is ${diff}`);

	document.getElementById("output").innerHTML=diff; //display diff
}

function multiply(){
	var num1 = document.getElementById("n1").value; //String of Number 1 called
	console.log(num1+" is number 1");

	var num2 = document.getElementById("n2").value; //String of Number 2 called
	console.log(num2+" is number 2");

	var product = Number(num1)*Number(num2); //product variable created, strings turned into numbers
	console.log(`the product of the values is ${product}`);

	document.getElementById("output").innerHTML=product; //display product
}

function divide(){
	var num1 = document.getElementById("n1").value; //String of Number 1 called
	console.log(num1+" is number 1");

	var num2 = document.getElementById("n2").value; //String of Number 2 called
	console.log(num2+" is number 2");

	var quotient = Number(num1)/Number(num2); //quotient variable created, strings turned into numbers
	console.log(`the quotient of the values is ${quotient}`);

	document.getElementById("output").innerHTML=quotient; //display quotient
}
