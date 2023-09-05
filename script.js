// FUNCTION DECLARATION
// function myFunction(num1, num2) {
//   return num1 + num2;
// }

// console.log(myFunction(10, 0));
// console.log(myFunction(10, 10));
// console.log(myFunction(10, 20));
// console.log(myFunction(20, 20));

// const result = myFunction(20, 30);
// console.log(result);

// FUNCTION EXPRESSION
// const myFunction = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(myFunction(10, 10));

// ARROW FUNCTION
// const myFunction = (num1, num2) => {
//   return (num1 * num2) / num1;
// };

// console.log(myFunction(10, 10));

// const myFunction = (num1, num2) => num1 * num2;
// console.log(myFunction(10, 10));

// const myFunction = () => console.log("MyFunction...");
// myFunction();

// FUNCTION EXERCISES
// DEC FUNCTION EX
// evenOrOdd(1);
// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log(`${number} is even`);
//   } else {
//     console.log(`${number} is odd`);
//   }
// }
// evenOrOdd(2);

// EXP FUNCTION EX
// const evenOrOdd = function (number) {
//   if (number % 2 === 0) {
//     console.log(`${number} is even`);
//   } else {
//     console.log(`${number} is odd`);
//   }
// };
// evenOrOdd(1);
// evenOrOdd(2);

// ARR FUNCTION EX
// const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     console.log(`${number} is even`);
//   } else {
//     console.log(`${number} is odd`);
//   }
// };
// evenOrOdd(1);
// evenOrOdd(2);

// FUNCTION EXERCISES
// function decExercise(num1, num2) {
//   if (num1 >= num2) {
//     console.log(`${num1} ikkidan katta`);
//   } else {
//     console.log(`${num1} soni ${num2} sonidan kichik`);
//   }
// }
// decExercise(1, 2);

// const expFunction = function (num1, num2) {
//   if (num1 >= num2) {
//     console.log(`${num1}`);
//   } else {
//     console.log(`${num1} soni ${num2} sonidan kichik`);
//   }
// };
// expFunction(1, 2);

// const arrFunction = (num1, num2) => {
//   if (num1 >= num2) {
//     console.log(`${num1}`);
//   } else {
//     console.log(`${num1} soni ${num2} sonidan kichik`);
//   }
// };
// arrFunction(3, 2);

// ARRAYS AND METHODS
// const array1 = ["Html", "Css", "JavaScript"];
// console.log(array1);

// CONCAT() METHOD
// const array1 = ["Html", "Css", "JavaScript"];
// const array2 = ["Bootstrap", "Sass", "ReactJs"];
// const result = array1.concat(array2);
// console.log(result);

// FIND() METHOD
// const array1 = [2, 8, 5, 67, 1, 22, 16];
// // const array2 = (str) => {
// //   return str == 18;
// // };
// const result = array1.find((elem) => elem > 10);
// console.log(result);

// FILTER() METHOD
// const array1 = ["1", 1, "Akbar", "1", "Developer"];
// const filterValues = (str) => {
//   return str === "Akbar";
// };
// const result = array1.filter(filterValues);
// console.log(result);

// MAP() METHOD
// const array1 = [1, 2, 3, 4, 5, 6, 7];
// const mapMethod = (number) => {
//   return "id:" + number;
// };
// const result = array1.map(mapMethod);
// console.log(result);

// SORT() METHOD
// const array1 = ["Xislat", "Akbar", "Tolqin", "Abdulaziz"];
// const array2 = [6, 7, 4, 3, , 5, 1, 2];
// const result = array1.concat(array2).sort();
// console.log(result);

// LENGTH METHOD
// const array1 = [1, 2, 3, 4, 5, , 12, 32, 321, 433, 535, 25];
// const result = array1.length;
// console.log(result);

// TOSTRING() METHOD
// const array1 = ["1", 2, 3];
// let demo = document.getElementsByClassName("demo");
// const result = (demo = array1.toString());
// console.log(result);

// JOIN() METHOD
// const array1 = [1, 2, 3];
// const result = array1.join("+");
// console.log(result)

// POP() METHOD
// const array1 = [1, 2, "3"];
// array1.pop();
// console.log(array1);

// PUSH() METHOD
// const array1 = ["Banan", "Olma", "Kivi"];
// array1.push("Olcha");
// console.log(array1);

// SHIFT() METHOD
// const array1 = ["Olma", "Olcha", "Banan"];
// array1.shift();
// console.log(array1);

// UNSHIFT() METHOD
// const array1 = ["Olma", "Olcha", "Banan"];
// array1.unshift("Gilos");
// console.log(array1);

// INDEX[] METHOD
// const array1 = [1, 2, 3, , 54, , 453, 34, 54, 43, 54];
// array1[0] = 1;
// console.log(array1);

// DELETE() METHOD
// const array1 = [1, 2, "test"];
// delete array1[1];
// console.log(array1);

// FLAT() METHOD
// const array1 = [1, 2, [11, 2, 2, 3, 2], ["Akbar", "Shuhratullayev"]];
// const result = array1.flat().sort();
// console.log(result);

// SPLICE() METHOD
// const array1 = ["Banan", "Olma", "Olcha"];
// array1.splice(2, 0, "Akbar", "Gilos");
// console.log(array1);

// SLICE() METHOD
// const array1 = ["Olma", 2, "Olcha", "Banan", "Shaftoli"];
// const result = array1.slice(1, 3);
// console.log(result);

// FOREACH() METHOD
// const names = ["akbar", "akmal", "akrom"];
// const newNames = [];
// names.forEach(function (name) {
//   const newName = name.charAt().toUpperCase() + name.slice(1) + "bek";
//   newNames.push(newName);
// });
// console.log(newNames);
