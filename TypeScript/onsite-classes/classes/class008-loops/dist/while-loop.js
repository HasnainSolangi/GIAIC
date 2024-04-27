"use strict";
/*
Basic syntax of While loop and Do-While loop:

    while (condition) {
        statement
    }
 
    do {
        statement
    } while (condition);
*/
// Example 1: Using a while loop to generate a multiplication table of 5
let i = 1;
while (i <= 10) {
    console.log(5, "x", i, "=", 5 * i);
    i++;
}
// Output: Multiplication table of 5
console.log("-------------------------");
// Example 2: Using a do-while loop to print a multiplication table of 7
let j = 1;
do {
    console.log(7, "x", j, "=", 7 * j);
    j++;
} while (j <= 10);
// Output: Multiplication table of 7
