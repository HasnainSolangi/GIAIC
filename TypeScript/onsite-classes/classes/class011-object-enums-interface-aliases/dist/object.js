"use strict";
// Object Types
Object.defineProperty(exports, "__esModule", { value: true });
// Define a car object with specific properties
const car = {
    name: "Mercedes",
    color: "Black",
    year: 2021,
    engine: 2.0,
    price: '$100000',
    inStock: true,
    availableColors: ["Red", "Blue", "Green"]
};
console.log(car); // Log the whole car object
console.log('------------------------------------');
// Define a person object with specific properties
const person = {
    country: "USA",
    name: "John",
    age: 30,
    city: "New York",
    married: true,
    cars: ["Ford", "BMW", "Fiat"]
};
console.log(person); // Log the whole person object
console.log(person.country); // Log a specific property (country)
console.log(person['cars']); // Log another specific property (cars) using bracket notation
console.log('------------------------------------');
// Define a pet object with specific properties
const pet = {
    name: "Oreo",
    color: "Black",
    age: 2,
    food: "Milk",
    eat: function () {
        console.log('I am eating', this.food); // Log food property
    }
};
console.log(pet); // Log the whole pet object
pet.eat(); // Invoke the eat method
