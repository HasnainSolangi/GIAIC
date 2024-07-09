"use strict";
// TypeScript example demonstrating Object Oriented Programming (OOP) principles.
// OOP stands for Object Oriented Programming, a paradigm that uses classes and objects
// to model real-world entities and their relationships. It promotes code reusability,
// modularity, and scalability, making it fundamental in software development.
// Define a class
class Animal {
    // Properties
    name;
    age;
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    speak() {
        console.log(`${this.name} says hello!`);
    }
}
// Create instances of the class
const cat = new Animal("Whiskers", 5);
const dog = new Animal("Buddy", 3);
// Accessing properties
console.log(cat.name); // Output: Whiskers
console.log(dog.name); // Output: Buddy
// Calling methods
cat.speak(); // Output: Whiskers says hello!
dog.speak(); // Output: Buddy says hello!
console.log("-------------------------");
// Define a class
class Product {
    // Properties
    name;
    price;
    productId;
    // Constructor
    constructor(name, price, productId) {
        this.name = name;
        this.price = price;
        this.productId = productId;
    }
    // Method
    getProductDetails() {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }
}
// Create instances of the class
const laptop = new Product("Laptop", 1200, "PRD1234");
const smartphone = new Product("Smartphone", 800, "PRD5678");
// Accessing properties
console.log(laptop.name); // Output: Laptop
console.log(smartphone.name); // Output: Smartphone
// Calling methods
laptop.getProductDetails(); // Output: Product: Laptop, Price: $1200
smartphone.getProductDetails(); // Output: Product: Smartphone, Price: $800
