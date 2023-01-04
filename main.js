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
// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// ("{num1} Is The Same Value As {str}");
// ("{num1} Is The Same Value As {str} But Not The Same Type");
// ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// ("{str} Is The Same Type As {str2} But Not The Same Value");

// if (num1 == str) {
// 	console.log(`${num1} Is The Same Value As ${str}
// `);
// }
// if (num1 == str && typeof num1 != typeof str) {
// 	console.log(`${num1} Is The Same Value As ${str} But Not The Same Type
// `);
// }
// if (num1 != str && typeof num1 != typeof str2) {
// 	console.log(`${num1} Is The Same Value As ${str2} But Not The Same Type
// `);
// }
// if (str2 !== str && typeof str == typeof str2) {
// 	console.log(`${str} Is The Same Value As ${str2} But Not The Same Type
// `);
// }

//P4

// Edit What You Want Here

// let num1 = 4;
// let num2 = 2;
// let num3 = 4;
// let num4 = 27;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// Condition 1

// if (num1 > num2) {
// 	console.log("True");
// } else {
// 	console.log("False");
// }

// Condition 2

// if (num1 > num2 && num1 < num4) {
// 	console.log("True");
// } else {
// 	console.log("False");
// }

// Condition 3

// if (num1 > num2 && num1 === num3) {
// 	console.log("True");
// } else {
// 	console.log("False");
// }

// Condition 4

// if (num1 + num2 < num4) {
// 	console.log("True");
// } else {
// 	console.log("False");
// }

// Condition 5

// if (num1 + num3 < num4) {
// 	console.log("True");
// } else {
// 	console.log("False");
// }

// Condition 6

// if (num1 + num2 + num3 < num4) {
// 	console.log("True");
// } else {
// 	console.log("False");
// }

// Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
// 	console.log("True");
// } else {
// 	console.log("False");
// }

//[ 1 ] تكليفات خاصة ب [ Switch Statement ]
// let day = "   friday  ";
// // // You Need To Remove Spaces And Make First Letter Capital => Friday

// // let day = "Friday";
// // let day = "Saturday";
// // let day = "Sunday";
// // // Output => "No Appointments Available"

// // let day = "Monday";
// // let day = "Thursday";
// // // Output => "From 10:00 AM To 5:00 PM"

// // let day = "Tuesday";
// // // Output => "From 10:00 AM To 6:00 PM"

// // let day = "Wednesday";
// // // Output => "From 10:00 AM To 7:00 PM"

// // let day = "World";
// // // Output => "Its Not A Valid Day"

// day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);
// switch (day) {
// 	case "Saturday":
// 		console.log("No Appointments Available");
// 		break;
// 	case "Sunday":
// 		console.log("No Appointments Available");
// 		break;
// 	case "Monday":
// 		console.log("From 10:00 AM To 5:00 PM");
// 		break;
// 	case "Tuesday":
// 		console.log("From 10:00 AM To 6:00 PM");
// 		break;

// 	case "Wednsday":
// 		console.log("From 10:00 AM To 7:00 PM");
// 		break;

// 	case "Thursday":
// 		console.log("From 10:00 AM To 5:00 PM");
// 		break;
// 	case "Friday":
// 		console.log("No Appointments Available");
// 		break;
// 	default:
// 		console.log("Its Not A Valid Day");
// }

//Arrays

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// myFriends.pop()
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// console.log(myFriends.filter(elem => elem !== myFriends[3])); // ["Ahmed", "Elham", "Osama"];

//P3

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.pop();
// friends.shift();
// console.log(friends); // ["Eman", "Osama"]

//P6
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here
// let y = arr2.pop();
// let x = arr1.pop();
// let f = arr2.pop();
// allArrs.push(f, x, y);
// allArrs = allArrs.toString().toLowerCase().replaceAll(",", "");

// console.log(allArrs); // fxy

// [ 5 ] تكليفات خاصة ب [ Higher Order Functions ]
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// // Elzero

// const result = mix
// 	.map((letter) => (isNaN(parseInt(letter)) ? letter : ""))
// 	.reduce((acc, letter) => acc + letter);

// console.log(result);

//P2
// let myString = "EElllzzzzzzzeroo";

// // Elzero
// const result = myString
// 	.split("")
// 	.filter((letter, index, arr) => {
// 		return arr.indexOf(letter) == index;
// 	})
// 	.join("");
// console.log(result);

//P3

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// // Elzero

// let base = myArray
// 	.reduce((acc, current) => acc.concat(current))
// 	.replace(",", "");

// console.log(base);

//P4
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// // [-1, -10, 10, 20, -5, -3]
// let result = numsAndStrings.filter(elem => typeof (elem) == 'number').map(elem => -elem);
// console.log(result);

//P5
// let nums = [2, 12, 11, 5, 10, 1, 99];

// // 500

// let result = nums.reduce((acc, curr) => {
// 	return curr % 2 == 0 ? acc * curr : acc + curr;
// }, 1);

// console.log(result);

//[ 4 ] تكليفات خاصة ب [ Objects And Methods ]

// Create Your Object Here
const member = {
	name: "Elzero",
	age: 30,
	country: "Egypt",
	fullDetails: function () {
		return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
	},
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
