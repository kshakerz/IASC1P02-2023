console.log("Page load began...");

function addNums(){
  var num1 = document.getElementById("n1").value;
  console.log("String of Number 1 called");
  var rightNum1 = Number(num1);
  console.log("String of Number 1 converted to number");
	console.log(rightNum1+" is number 1");

  var num2 = document.getElementById("n2").value;
  console.log("String of Number 2 called");
  var rightNum2 = Number(num2);
  console.log("String of Number 2 converted to number");
	console.log(rightNum2+" is number 2");

  var sum = rightNum1+rightNum2;
  console.log("Sum variable is created");
  console.log(sum+" is the sum");

	document.getElementById("output").innerHTML=sum;
	console.log("Sum is displayed");
}
