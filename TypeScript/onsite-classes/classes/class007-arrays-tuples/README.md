# TypeScript Arrays & Tuples 🔍🔧📝💡

Arrays and tuples are both data structures used to store collections of elements, but they differ in several key aspects:
* Mutability: Arrays are mutable, meaning their elements can be changed, added, or removed after initialization. Tuples, on the other hand, are immutable, meaning their elements cannot be changed after initialization.
* Length: Arrays can grow or shrink in size dynamically by adding or removing elements. Tuples have a fixed length, meaning the number of elements they contain is predetermined and cannot be changed.
* Types: Arrays can contain elements of the same or different types. Tuples are heterogeneous data structures, meaning they can contain elements of different types, but the types and their order are fixed at initialization.
* Access: Elements in arrays are accessed by their indices, and the order of elements can be changed. Elements in tuples are accessed by their positions, and the order of elements is fixed.

In summary, arrays are mutable, dynamically sized, and can contain elements of the same or different types, while tuples are immutable, fixed-length, and contain elements of different types with a predetermined order.

## Arrays 💻

TypeScript examples demonstrating various operations on arrays.

### Introduction 📌

Arrays are a fundamental data structure in TypeScript, allowing you to store collections of elements. Here, we'll explore how to work with arrays in TypeScript.

### Basic Array Operations 🔢

#### 1. Array of Numbers
```typescript
// Array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers);
```
This code initializes an array of numbers and logs it to the console.

#### 2. Array of Mixed Types
```typescript
// Array of mixed types
const mixedArray: (string | number)[] = ["apple", 3, "peach", 7, "banana"];
console.log("Mixed array:", mixedArray);
```
Here, I declare an array containing both strings and numbers.

#### 3. Accessing and Modifying Elements
```typescript
// Accessing elements by index
console.log("First element of mixedArray:", mixedArray[0]);
console.log("Third element of mixedArray:", mixedArray[2]);

// Modifying array elements
mixedArray[1] = "grape";
console.log("Modified mixedArray:", mixedArray);
```
I demonstrate accessing and modifying elements in an array.

#### 4. Length of the Array
```typescript
// Length of the array
console.log("Length of mixedArray:", mixedArray.length);
```
This code snippet shows how to get the length of an array.

#### 5. Adding and Removing Elements
```typescript
// Adding elements to the end of the array
mixedArray.push("pear");
console.log("After pushing 'pear':", mixedArray);

// Removing the last element from the array
mixedArray.pop();
console.log("After popping:", mixedArray);
```
I demonstrate adding elements to the end of an array and removing the last element.

#### 6. Readonly Array
```typescript
// Readonly array
const readonlyArray: readonly string[] = ["readonly", "array"];
console.log("Readonly array:", readonlyArray);
```
This example shows how to create a readonly array, preventing modifications.

### Additional Array Examples 🌟

#### 1. Array Initialization
```typescript
// Initializing an array with explicit type declaration
const colors: string[] = ["red", "green", "blue"];
console.log("Colors array:", colors);
```
Here, I initialize an array of strings representing colors.

#### 2. Array Concatenation
```typescript
// Concatenating two arrays
const fruits: string[] = ["apple", "banana"];
const vegetables: string[] = ["carrot", "potato"];
const combinedArray: string[] = fruits.concat(vegetables);
console.log("Combined array:", combinedArray);
```
I demonstrate concatenating two arrays to create a single array.

#### 3. Iterating Through an Array
```typescript
// Iterating through an array
const numbers: number[] = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}
```
This example illustrates how to iterate through an array using a for...of loop.

### Conclusion 🎉

These examples provide a solid foundation for working with arrays in TypeScript. Feel free to explore and modify the code to suit your needs!


# Tuples 💼📊🔄🛠️

TypeScript examples demonstrating various operations on tuples.

## Introduction 📝🔍

Tuples are a versatile data structure in TypeScript, allowing you to represent collections of elements with different types. Here, we'll explore how to work with tuples in TypeScript.

## Basic Tuple Operations 🔢

### 1. Tuple Initialization
```typescript
// Tuple example with type safety
let book: [string, number, boolean] = ["Al-Quran", 600, true];

// // If you need to add more elements to the tuple later, create a new tuple with the additional elements
let modifiedBooks: [string, number, boolean, string,] = [...book, "Tafsir al-Tabari",];

console.log("Modified books tuple:", modifiedBooks);

// Result - Modified books tuple: [ 'Al-Quran', 600, true, 'Tafsir al-Tabari']
```

### 2. Tuple Initialization 
```typescript
let person: [string, number, boolean] = ["Hasnain Ahmed", 25, false];
console.log("Person tuple:", person);
```

### 3. Tuple Initialization - Coordinates in 2D Space
```typescript
let employee: [string, number, string] = ["Alice", 12345, "Software Engineer"];
console.log("Employee tuple:", employee);
```

### 4. Tuple Initialization - Coordinates in 3D Space
```typescript
let point3D: [number, number, number] = [5, 10, 3];
console.log("3D Point tuple:", point3D);
```

### 5. Tuple Initialization - employee Information
```typescript
let employee: [string, number, string] = ["Alice", 12345, "Software Engineer"];
console.log("Employee tuple:", employee);
```

#### *Happy Coding*

#### Name:- Hasnain Ahmed 
#### Roll No:- 00310538
#### Quarter:- 1
#### Batch:- 1
#### City:- Karachi
#### Centre:- Sindh Governor House Karachi
#### Campus:- Main
#### Days/Time:- Wednesday 09:00 am - 12:00 pm

[LinkedIn - Hasnain Ahmed](https://www.linkedin.com/in/hasnainahmed90s/)<p>
[Governor Sindh Initiative for GenAI, Web3, and Metaverse](https://www.linkedin.com/company/governor-sindh-initiative/mycompany/)
