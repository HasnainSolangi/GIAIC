"use strict";
// Arrays examples
// Array of numbers
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers);
console.log("-------------------------");
// Array of mixed types
const mixedArray = ["apple", 3, "peach", 7, "banana"];
console.log("Mixed array:", mixedArray);
console.log("-------------------------");
// Accessing elements by index
console.log("First element of mixedArray:", mixedArray[0]);
console.log("Third element of mixedArray:", mixedArray[2]);
console.log("-------------------------");
// Modifying array elements
mixedArray[1] = "grape";
console.log("Modified mixedArray:", mixedArray);
console.log("-------------------------");
// Length of the array
console.log("Length of mixedArray:", mixedArray.length);
console.log("-------------------------");
// Adding elements to the end of the array
mixedArray.push("pear");
console.log("After pushing 'pear':", mixedArray);
console.log("-------------------------");
// Removing the last element from the array
mixedArray.pop();
console.log("After popping:", mixedArray);
console.log("-------------------------");
// Readonly array
const readonlyArray = ["readonly", "array"];
// readonlyArray.push("new"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// readonlyArray[0] = "modified"; // Error: Index signature in type 'readonly string[]' only permits reading.
console.log("Readonly array:", readonlyArray);
