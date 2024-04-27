"use strict";
/* Basic syntax of for of loop
   for (variable of iterable) {
       statement
   }
*/
// Example 1: Iterating over an array of strings
const items = ["apple", "banana", "orange", "grape"];
for (const item of items) {
    console.log(item);
}
// Output:
// apple
// banana
// orange
// grape
console.log("-------------------------");
// Example 2: Iterating over a Set
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (const number of uniqueNumbers) {
    console.log(number);
}
// Output:
// 1
// 2
// 3
// 4
// 5
console.log("-------------------------");
// Example 3: Iterating over the characters of a string
const text = "Hello, world!";
for (const char of text) {
    console.log(char);
}
// Output:
// H
// e
// l
// l
// o
// ,
//  
// w
// o
// r
// l
// d
// !
console.log("-------------------------");
// Example 4: Iterating over the keys and values of an object using Object.entries()
const person = { name: "Hasnain Ahmed", age: "25", city: "Karachi" };
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Hasnain Ahmed
// age: 25
// city: Karachi
console.log("-------------------------");
// Example 5: Iterating over the values of a Map
const scoreBoard = new Map([
    ["Babar", 155],
    ["Rizwan", 85],
    ["Saim", 75]
]);
for (const score of scoreBoard.values()) {
    console.log(score);
}
// Output:
// 155
// 85
// 75
