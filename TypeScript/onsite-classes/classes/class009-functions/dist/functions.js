"use strict";
// Basic TypeScript Function Examples:
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Function without Parameters:
// Function definition
function greet() {
    console.log("Hello, world!");
}
// Invoke function
greet();
// 2. Function with Parameters:
// Function definition
function add(a, b) {
    return a + b;
}
// Invoke function
const result = add(3, 5);
console.log("Result:", result);
// 3. Function with Optional Parameter:
// Function definition
function greetPerson(name, greeting) {
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
// Invoke function
greetPerson("Hasnain Ahmed");
greetPerson("Solangi", "Good morning");
// 4. Function with Default Parameter:
// Function definition
function greetUser(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
// Invoke function
greetUser("Hasnain Ahmed");
greetUser("Solangi", "Good evening");
// Example Array and Object:
// Student list array
const students = ["Hasnain", "Zain", "Nain"];
// Student object
const studentDetails = {
    name: "Hasnain Ahmed",
    age: 25,
    city: "Karachi"
};
// Loop through array of objects
for (const student of students) {
    console.log(student);
}
// Access object properties
console.log(studentDetails.name);
console.log(studentDetails.age);
