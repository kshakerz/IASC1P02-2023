console.log("Page load began...");

var age = prompt("What is your age?");
console.log("Pop up of age question");
console.log(age);

var todayDate=new Date;
console.log("Create and instance of today's date");
console.log(todayDate);

var year = todayDate.getFullYear();
console.log("Create and instance of current year");
console.log(todayDate);

document.write(year-age);
console.log("Writes your birth year");
console.log(year-age);
