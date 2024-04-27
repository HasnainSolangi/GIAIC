"use strict";
/*
   This block of comments explains the basic syntax of a for loop:

   1. Initialization: where the loop starts
   2. Condition: checks if the loop should continue
   3. Increment/decrement: updates the loop counter

   The for loop structure is as follows:
   for (initialization; condition; increment/decrement) {
       statement
   }
*/
// Example 1: Simple for loop printing numbers from 0 to 99
for (let i = 0; i < 100; i++) {
    console.log(i);
}
// Output: Prints numbers from 0 to 99 sequentially.
console.log("-------------------------");
// Example 2: Simple for loop printing a statement 100 times
for (let i = 0; i < 100; i++) {
    console.log("I will not be late for class anymore");
}
// Output: Prints the statement "I will not be late for class anymore" 100 times.
console.log("-------------------------");
// Example 3: For loop printing the multiplication table of 5
const tableNumber = 5;
for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + tableNumber * i);
}
// Output: Prints the multiplication table of 5 from 1 to 10.
console.log("-------------------------");
// Example 4: Using a for loop to iterate over an array and print each element
const cars = ["Rolls Royce", "Mercedes", "Tesla", "Toyota", "BMW"];
const dataLength = cars.length;
for (let i = 0; i < dataLength; i++) {
    console.log("My car is", cars[i]);
}
console.log("Total cars:", dataLength);
// Output: Prints each car from the array "cars" along with the total number of cars.
console.log("-------------------------");
// Example 5: Simple for loop counting down from 10 to 1
for (let i = 10; i > 0; i--) {
    console.log(i);
}
// Output: Prints numbers from 10 to 1 sequentially.
console.log("-------------------------");
// Example 6: Simple for loop printing even numbers from 0 to 20
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
// Output: Prints even numbers from 0 to 20 sequentially.
console.log("-------------------------");
// Example 7: For loop printing the squares of numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log("Square of", i, "is", i * i);
}
// Output: Prints the squares of numbers from 1 to 10.
console.log("-------------------------");
// Example 8: Using a for loop to iterate over a string and print each character
const message = "Hello, World!";
for (let i = 0; i < message.length; i++) {
    console.log("Character at position", i, "is", message[i]);
}
// Output: Prints each character of the string "Hello, World!" along with its position.
console.log("-------------------------");
// Example 9: Simple for loop printing numbers in reverse from 100 to 1
for (let i = 100; i >= 1; i--) {
    console.log(i);
}
// Output: Prints numbers from 100 to 1 in reverse order.
console.log("-------------------------");
// Example 10: Using a for loop to iterate over an array in reverse and print each element
const fruits = ["Papaya", "Orange", "Banana", "Pineapple", "Mango"];
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log("Fruit at index", i, "is", fruits[i]);
}
// Output: Prints each fruit from the array "fruits" in reverse order along with its index.
