# TypeScript Functions Examples

This Directory contains examples of various function declarations, invocations, and types in TypeScript. The examples cover basic syntax, functions with parameters, default parameters, optional parameters, return types, and more.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Basic Function Declarations](#basicFunctionDeclarations)
3. [Functions with Parameters](#functionsWithParameters)
4. [Functions with Return Types](#functions-with-return-types)
5. [Default and Optional Parameters](#default-and-optional-parameters)
6. [Arrow Functions](#arrow-functions)
7. [Rest Parameters](#rest-parameters)
8. [Self-Invoking Functions](#self-invoking-functions)
9. [Hoisted Functions](#hoisted-functions)

## Getting Started

This repository contains examples of TypeScript functions demonstrating different ways to declare and invoke functions, including various parameter types and return types.

## Basic Function Declarations
Basic function declarations in TypeScript are similar to JavaScript but with type annotations.

```
// Function declaration
function greet(): void {
    console.log("Hello, world!");
}

// Invoke the function
greet();

```
## Functions with Parameters
Functions can have required parameters, default parameters, and optional parameters. Each parameter can be annotated with a type.

```
// Function with parameters
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

// Invoke the function with a parameter
greet("John");

```
## Functions with Return Types
Functions can have explicit return types, ensuring that the values returned by the function match the expected type.

```
// Function with return type
function add(a: number, b: number): number {
    return a + b;
}

// Invoke the function with return type
const sum: number = add(3, 4);
console.log("Sum:", sum);

```
## Default and Optional Parameters
Default parameters allow you to specify a default value for a parameter. Optional parameters are parameters that may or may not be provided when the function is called.

```
// Function with default parameter
function greet(name: string = "world"): void {
    console.log(`Hello, ${name}!`);
}

// Invoke the function without providing a parameter
greet();

// Function with optional parameter
function greet(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Hello, world!");
    }
}

// Invoke the function with and without a parameter
greet("John");
greet();

```
## Arrow Functions
Arrow functions provide a concise way to write functions in TypeScript. They also lexically bind the this value.

```
// Arrow function
const greet = (name: string): void => {
    console.log(`Hello, ${name}!`);
};

// Invoke the arrow function
greet("Alice");

```
## Rest Parameters
Rest parameters allow you to pass an arbitrary number of arguments to a function, which are then available as an array.

```
// Function with rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Invoke the function with rest parameters
const total: number = sum(1, 2, 3, 4, 5);
console.log("Total:", total);

```
## elf-Invoking Functions
Self-invoking functions (also known as Immediately Invoked Function Expressions, IIFE) are functions that are executed as soon as they are defined.

```
// Self-invoking function
(() => {
    console.log("This function is self-invoking.");
})();

```
## Hoisted Functions
Function declarations in TypeScript are hoisted, meaning they can be called before they are defined in the code.

```
// Call the function before its declaration
greet();

// Function declaration
function greet(): void {
    console.log("Hello, world!");
}

```
**These examples demonstrate various TypeScript function declarations and invocations, including parameters, return types, default and optional parameters, arrow functions, rest parameters, self-invoking functions, and hoisted functions. Feel free to experiment with them in your TypeScript projects!**