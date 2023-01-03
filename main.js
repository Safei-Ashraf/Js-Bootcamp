// // console.log("Error");
// // console.table(["s", "x", "y", "z"]);
// // console.log(
// //   "%c------------------%c--------------",
// //   "color: red; font-size: 12px; font-weight: bold",
// //   "color: blue; font-size: 12px; font-weight: bold"
// // );
// // const body = document.getElementsByTagName("body");
// // const header = document.createElement("h1");
// // header.innerHTML = "YO YO";
// // header.setAttribute(
// //   "style",
// //   "color:blue; font-size: 80px; font-weight: bold; font-family: Arial; text-align: center;"
// // );
// // document.write(
// //   "<h1 style='color:blue; font-size: 80px; font-weight: bold; font-family: Arial; text-align: center;'> Hello world</h1>"
// // );

// // document.body.appendChild(header);

// // //EX3:
// // console.log(
// //   "%cElzero %cWeb %cSchool",
// //   "color: red; font-size:40px",
// //   "color: green; font-size:40px; font-weight:bold",
// //   "color: white; font-size:40px; background-color:blue"
// // );

// // //EX4:
// // console.group("Group 1");
// // console.log("Level 1");
// // console.log("Level 2");
// // console.group("Child Group");
// // console.log("Level 1");
// // console.log("Level 2");
// // console.group("Grand Child Group");
// // console.log("level 1");
// // console.log("level 2");
// // console.groupEnd();
// // console.groupEnd();
// // console.groupEnd();
// // console.group("Group 2");
// // console.log("level 1");
// // console.log("level 2");

// //EX5:
// // console.table(["Ezlero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// // //EX6:
// // console.log("I am a console");
// // document.write("I am in a Page");

// // //solution:

// // console.clear();
// // document.body.innerHTML = "";

// /*Lessons from 018 - 022*/

// //Ex1:
// // Replace ? With Arithmetic Operators
// // console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0 Failed

// // let num = 3;

// // // Solution One
// // console.log(num * num - num); // 6

// // // Solution Two
// // console.log(num + num); // 6

// // // Soultion Three
// // console.log(((num*num*num )/ (num*num)) + num); // 6

// // // Soultion Four
// // console.log(num/num * num+num); // 6

// // // Solution Five
// // console.log(((num*num + num*num)/num)); // 6

// // // Solution Six
// // console.log((num/(num*num))* (num**num) - num); // 6

// /*الدروس من رقم 023 إلى رقم 026 */
// // Examples
// // console.log(100_000); // 100000
// // console.log(100000); // 100000
// // console.log(5e4 + 5e4); // 100000

// // Your Solutions
// // console.log(1e5); // 100000
// // console.log(1_00_000); // 100000
// // console.log(100000); // 100000
// // console.log(parseInt("100000")); // 100000
// // console.log(Number(100000.00)); // 100000
// // console.log(10 *1e4); // 100000
// // console.log(1_00*1_000); // 100000
// // console.log(Math.pow(10,5)); // 100000
// // console.log(Math.max(100000,10000,100,1)); // 100000
// // console.log(Math.abs(-1e5)); // 100000

// //P2
// // console.log(Number.MIN_SAFE_INTEGER); // 9007199254740991

// // //P3

// // console.log(parseInt(Number.MAX_SAFE_INTEGER.toExponential(2))); // 16 // gets  9

// //P4
// // let myVar = "100.56789 Views";

// // console.log(parseInt(myVar)); // 100
// // console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// //P5
// // let num = 10;

// // console.log(Number.isInteger(num) + true); // 2

// //P6

// // let flt = 10.4;

// // console.log(parseInt(flt)); // 10
// // console.log(flt.toFixed(0)); // 10
// // console.log(Math.round(flt)); // 10
// // console.log(Math.floor(flt)); // 10
// // console.log(Math.ceil(flt) - true); // 10

// //P7
// // console.log(Math.floor(Math.random()*5)); // 0 || 1 || 2 || 3 || 4

// //String الدروس من رقم 027 إلى رقم 030

// //P1

// // let userName = "Elzero";
// // console.log(userName[0].toLowerCase().repeat(3)); // eee
// // console.log(userName.charAt(0).toLowerCase()); // e
// // console.log(userName.slice(0,1).toLowerCase()); // e
// // console.log(userName.substring(0,1).toLowerCase()); // e
// // console.log(userName.substr(0,1).toLowerCase()); // e
// // console.log(userName[userName.indexOf('E')].toLowerCase()); // e

// // //P2
// // let word = "Elzero";
// // let letterZ = "z";
// // let letterE = "e";
// // let letterO = "O";

// // console.log(word.includes(letterZ)); // True inclueds Z
// // console.log(word.startsWith(letterE.toUpperCase())); // True starts with E
// // console.log(word.endsWith(letterO.toLowerCase())); // True ends with O

// //Comparison & Logical Operators
// //الدروس من رقم 031 إلى رقم 032

// // console.log(100 == "100"); // true
// // console.log(100 !== 1000); // true
// // console.log(110 != 100 != 10 != 20); // true
// // console.log(-10 == "-10"); // true
// // console.log(! (-50 >= +"-40")); // true
// // console.log(! (10 >= -"-40")); // true
// // console.log(! ("10" != 10)); // true
// // console.log(! (20 === false)); // true

// //P2
// // let num1 = 10;
// // let num2 = 20;

// // console.log(num1 < num2); // true
// // console.log(num2 > num1); // true
// // console.log(!(num1 === num2)); // true
// // console.log(num1 !== num2); // true
// // console.log(!(num1> num2)); // true
// // console.log(!(num2 <= num1)); // true

// //[ 4 ] تكليفات خاصة ب [ If Condition ]

// // // Test Case 1
// let num = 9; // "009"

// // // Test Case 2
// // let num = 20; // "020"

// // // Test Case 3
// // let num = 110; // "110"

// console.log(num);
// let num = 190;
// if (num < 10) console.log("00" + num);
// if (num > 10 && num < 100) console.log("0" + num);
// if (num >= 100) console.log(num);

//P2:
let num1 = 9;
let str = "9";
let str2 = "20";

// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

if (num1 == str) {
	console.log(`${num1} Is The Same Value As ${str}
`);
}
if (num1 == str && typeof num1 != typeof str) {
	console.log(`${num1} Is The Same Value As ${str} But Not The Same Type
`);
}
if (num1 != str && typeof num1 != typeof str2) {
	console.log(`${num1} Is The Same Value As ${str2} But Not The Same Type
`);
}
if (str2 !== str && typeof str == typeof str2) {
	console.log(`${str} Is The Same Value As ${str2} But Not The Same Type
`);
}
