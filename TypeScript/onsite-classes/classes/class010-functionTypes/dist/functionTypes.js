"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Function declaration
function myInfo() {
    // function body
    console.log("Hello! My name is Hasnain Ahmed");
    console.log("I am from Pakistan");
    console.log("I am a Programmer");
    console.log("------------------------------");
}
// invoke/call function multiple times
myInfo();
myInfo();
myInfo();
myInfo();
// Function with required parameters
function myInfoWithParameter(name, country, job) {
    // function body
    console.log("Hi my name is", name); // Argument pass log
    console.log(`I am from ${country}`); // Template string
    console.log("I am a " + job); // Concatenation
    console.log("------------------------------");
}
// Invoke function with required parameters
myInfoWithParameter("Aisha", "Pakistan", "Teacher");
myInfoWithParameter("Areesha", "Pakistan", "Teacher and Programmer");
myInfoWithParameter("Muneeb", "Pakistan", "Programmer");
myInfoWithParameter("Hasnain Ahmed", "Pakistan", "Typescript Programmer");
// Function with default parameters
function myInfoWithDefaultParameter(name, country, job = "Software Engineer") {
    // function body    
    console.log("Hi my name is", name); // Argument pass log
    console.log(`I am from ${country}`); // Template string
    console.log("I am a " + job); // Concatenation
    console.log("------------------------------");
}
// Invoke function with default parameters
myInfoWithDefaultParameter("Zubaida", "Pakistan");
myInfoWithDefaultParameter("Usman", "Pakistan");
myInfoWithDefaultParameter("Aisha", "Pakistan", "Teacher");
// Function with optional parameters
function myInfoWithOptionalParameter(name, country, job) {
    // function body    
    console.log("Hi my name is", name); // Argument pass log
    console.log(`I am from ${country}`); // Template string
    if (job) {
        console.log("I am a " + job); // Concatenation
    }
    console.log("------------------------------");
}
// Invoke function with optional parameters
myInfoWithOptionalParameter("Noor ul Huda", "Pakistan");
// Function with return type
function myFunctionWithReturnType(n1, n2) {
    return n1 + n2;
}
// Invoke function with return type and log results
const result = myFunctionWithReturnType(10, 20);
console.log(result);
console.log(myFunctionWithReturnType(50, 20));
console.log("------------------------------");
// Function that is hoisted
logDate();
function logDate() {
    const date = new Date();
    console.log(date);
    console.log("------------------------------");
}
// Function expression
const myInfoWithFunctionExpression = function () {
    // function body
    console.log("Hi my name is Hasnain Ahmed");
    console.log("I am from Pakistan");
    console.log("------------------------------");
};
// Invoke function expression
myInfoWithFunctionExpression();
// Self-invoking function
(function () {
    // function body
    console.log("Hi I am Hasnain from self-invoking function");
    console.log("------------------------------");
})();
// Arrow function
const myMultiplicationWithArrowFunction = (num1, num2) => num1 * num2;
// Invoke arrow function and log result
const result2 = myMultiplicationWithArrowFunction(10, 20);
console.log(result2);
// Before arrow function expression
const beforeArrowFunction = function (num1, num2) {
    return num1 - num2;
};
// Invoke function and log result
console.log(beforeArrowFunction(123, 23));
console.log("------------------------------");
// Arrow function with rest parameters
const sumAllNumbers = (message, ...numbers) => {
    console.log(numbers);
    console.log(typeof numbers);
    console.log(message);
    let total = 0;
    for (const number of numbers) {
        total += number; // total = total + number
    }
    return total;
};
// Invoke function with rest parameters and log result
const result3 = sumAllNumbers("hello I am rest parameters function", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result3);
