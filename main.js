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

console.group("Group 1");
console.log("Level 1");
console.log("Level 2");
console.group("Child Group");
console.log("Level 1");
console.log("Level 2");
console.group("Grand Child Group");
console.log("level 1");
console.log("level 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("level 1");
console.log("level 2");
