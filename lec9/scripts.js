console.log("Page load began...");

var start=new Date;
console.log("Create instance of date");
console.log(start);

function stopTime(){
	console.log("User pressed STOP TIME button");
	var stop=new Date();
	console.log("Create instance of date");
	console.log(stop);
	var passed=(stop-start)/600;
	console.log("Create instance of passed time in seconds");
	console.log(passed);
	alert("You have been on the page for "+passed+" seconds");
	console.log("Pop up of time passed");
}
