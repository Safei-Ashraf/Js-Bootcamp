// console.log("Error");
// console.table(["s", "x", "y", "z"]);
// console.log(
//   "%c------------------%c--------------",
//   "color: red; font-size: 12px; font-weight: bold",
//   "color: blue; font-size: 12px; font-weight: bold"
// );
// const body = document.getElementsByTagName("body");
// const header = document.createElement("h1");
// header.innerHTML = "YO YO";
// header.setAttribute(
//   "style",
//   "color:blue; font-size: 80px; font-weight: bold; font-family: Arial; text-align: center;"
// );
// document.write(
//   "<h1 style='color:blue; font-size: 80px; font-weight: bold; font-family: Arial; text-align: center;'> Hello world</h1>"
// );

// document.body.appendChild(header);

// //EX3:
// console.log(
//   "%cElzero %cWeb %cSchool",
//   "color: red; font-size:40px",
//   "color: green; font-size:40px; font-weight:bold",
//   "color: white; font-size:40px; background-color:blue"
// );

// //EX4:
// console.group("Group 1");
// console.log("Level 1");
// console.log("Level 2");
// console.group("Child Group");
// console.log("Level 1");
// console.log("Level 2");
// console.group("Grand Child Group");
// console.log("level 1");
// console.log("level 2");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("Group 2");
// console.log("level 1");
// console.log("level 2");

//EX5:
// console.table(["Ezlero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// //EX6:
// console.log("I am a console");
// document.write("I am in a Page");

// //solution:

// console.clear();
// document.body.innerHTML = "";

/*Lessons from 018 - 022*/

//Ex1:
// Replace ? With Arithmetic Operators
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0 Failed

let num = 3;

// Solution One
console.log(num * num - num); // 6

// Solution Two
console.log(num + num); // 6

// Soultion Three
console.log(((num*num*num )/ (num*num)) + num); // 6

// Soultion Four
console.log(num/num * num+num); // 6

// Solution Five
console.log(((num*num + num*num)/num)); // 6

// Solution Six
console.log((num/(num*num))* (num**num) - num); // 6