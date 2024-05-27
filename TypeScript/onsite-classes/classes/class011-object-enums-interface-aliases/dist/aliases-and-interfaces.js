"use strict";
// Type Aliases
Object.defineProperty(exports, "__esModule", { value: true });
// Use the Age alias for a variable
const age = 24;
console.log(age); // Log the age
console.log('------------------------------------');
// Use the Pet alias for an object
const pet = {
    name: "Tom",
    color: "Gray and white",
    age: 5,
    food: "Jerry"
};
console.log(pet); // Log the whole pet object
console.log('------------------------------------');
// Use the Pet2 alias for an object with the optional method not defined
const pet2 = {
    name: "Mano",
    color: "White",
    age: 3,
    food: "Fish"
};
console.log(pet2.food); // Log the food property
console.log('------------------------------------');
// Use the Human interface for an object
const john = {
    name: "John",
    age: 30,
    sleep: () => {
        console.log('I am sleeping');
    },
    legs: 2,
    hands: 2
};
console.log(john); // Log the whole human object
john.sleep(); // Invoke the sleep method
console.log('------------------------------------');
// Use the SuperHero interface for an object
const spiderMan = {
    name: "Peter Parker",
    age: 30,
    sleep: () => {
        console.log('I am sleeping');
    },
    legs: 2,
    hands: 2,
    superPower: "Spider Sense and Web Sense",
    heroName: "Spider Man"
};
console.log(spiderMan); // Log the whole superhero object
spiderMan.sleep(); // Invoke the sleep method
console.log('------------------------------------');
// Use the Vehicle interface for an object
const myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    start: () => {
        console.log('Starting the car');
    }
};
console.log(myCar); // Log the whole vehicle object
myCar.start(); // Invoke the start method
