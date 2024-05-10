# TypeScript Functions
TypeScript has a specific syntax for typing function parameters and return values.

Read more about functions [here](https://www.w3schools.com/js/js_functions.asp)


# Explaining Parameters and Arguments in Functions


In programming, parameters and arguments are essential concepts in function definitions and function calls.

## Parameters

**Definition:** Parameters are variables listed inside the parentheses of a function definition. They represent values that the function expects to receive when it is called.

**Example:**
```typescript
function greet(name: string, age: number) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
```
In this example, `name` and `age` are parameters of the `greet` function.

## Arguments

**Definition:** Arguments are the actual values that are passed to a function when it is called. These values are assigned to the corresponding parameters defined in the function.

**Example:**
```typescript
greet("Hasnain", 25);
```
In this example, `"Hasnain"` and `25` are arguments passed to the `greet` function. They correspond to the `name` and `age` parameters respectively.


# Functions

## Return Type

The type of the value returned by the function can be explicitly defined.

### Example: Get your own TypeScript Server

```typescript
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}
```

If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

## Void Return Type

The type `void` can be used to indicate a function doesn't return any value.

### Example:

```typescript
function printHello(): void {
  console.log('Hello!');
}
```

## Parameters

Function parameters are typed with a similar syntax as variable declarations.

### Example:

```typescript
function multiply(a: number, b: number) {
  return a * b;
}
```

If no parameter type is defined, TypeScript will default to using `any`, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.


## Optional Parameters

By default, TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

### Example:

```typescript
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
```

## Default Parameters

For parameters with default values, the default value goes after the type annotation:

### Example:

```typescript
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
```

TypeScript can also infer the type from the default value.

## Named Parameters

Typing named parameters follows the same pattern as typing normal parameters.

### Example:

```typescript
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}
```

## Rest Parameters

Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

### Example:

```typescript
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
```

## Type Alias

Function types can be specified separately from functions with type aliases.

These types are written similarly to arrow functions.

### Example:

```typescript
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
```

---

# TypeScript Exercises

Test Yourself With Exercises

**Exercise:**

Create a function that returns the string "Learning is Fun!", with the return type explicitly defined:

```typescript
function myFunc(): string {
  return "Learning is Fun!";
}
```



# Class work by Sir Isfhan Ahmed & Ma'am Manaheel Jameel.

```function admitCard(
    name: string,   // parameter
    rollNumber: number, // parameter
    courseName: string = "Typescript", // parameter with default value
    phone?: number // optional parameter
): void {

    // function body
    console.log('#------------------------#');

    console.log("Name: " + name + "\n" + `Roll Number: ${rollNumber}` + "\n" + "Course Name: " + courseName);
```
```
    // check if phone is not undefined
    if (phone) {
        console.log("Phone Number: " + phone);
    }

    console.log('#------------------------#');
}
```
```
// invoke function
admitCard("Hasnain Ahmed", 62465, "Next.js", 1234567890) // argument
admitCard("Mirza Solangi", 26625, undefined, 9876543210) // argument with default value 
```
```
// student list array object
const studentsList = [
    {
        name: "Ali",
        rollNumber: 35035,
        courseName: "Next.js",
        phone: 3547589275
    },
    {
        name: "Hannan",
        rollNumber: 35036,
        courseName: "Typescript",
        phone: 1090078601
    },
    {
        name: "Aayat",
        rollNumber: 35037,
        courseName: "Python"
    },
]

```
```
// loop through array of object
for (const student of studentsList) {

    // invoke function with object value as argument
    admitCard(student.name, student.rollNumber, student.courseName, student.phone)
}
```

Ma'am Manahil tea function
```
function makeTea(sugar: number = 4, milk: number, water?: number): void {
    let tea = 2 + sugar + milk;
    console.log(tea);
}

makeTea(undefined, 2, undefined); // Function call with default sugar, 2 units of milk, and undefined water
makeTea(1, 3, undefined); // Function call with 1 unit of sugar, 3 units of milk, and undefined water

``````

