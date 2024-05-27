// Type Aliases

// Define a custom type alias for age
type Age = string | number;

// Use the Age alias for a variable
const age: Age = 24;
console.log(age); // Log the age
console.log('------------------------------------');

// Define a custom type alias for a pet object
type Pet = {
    name: string,
    color: string,
    age: number,
    food: string,
    eat?: () => void // Optional method
}

// Use the Pet alias for an object
const pet: Pet = {
    name: "Tom",
    color: "Gray and white",
    age: 5,
    food: "Jerry"
}
console.log(pet); // Log the whole pet object
console.log('------------------------------------');


// Define a custom type alias for a pet2 object with optional method
type Pet2 = {
    name: string,
    color: string,
    age: number,
    food: string,
    eat?: () => void // Optional method
}

// Use the Pet2 alias for an object with the optional method not defined
const pet2: Pet2 = {
    name: "Mano",
    color: "White",
    age: 3,
    food: "Fish"
}
console.log(pet2.food); // Log the food property
console.log('------------------------------------');

// Interfaces
// Define an interface for a Human
interface Human {
    name: string,
    age: number,
    sleep: () => void,
    legs: number,
    hands: number
}

// Use the Human interface for an object
const john: Human = {
    name: "John",
    age: 30,
    sleep: () => {
        console.log('I am sleeping');
    },
    legs: 2,
    hands: 2
}
console.log(john); // Log the whole human object
john.sleep(); // Invoke the sleep method
console.log('------------------------------------');

// Define an interface for a SuperHero extending the Human interface
interface SuperHero extends Human {
    superPower: string,
    heroName: string
}

// Use the SuperHero interface for an object
const spiderMan: SuperHero = {
    name: "Peter Parker",
    age: 30,
    sleep: () => {
        console.log('I am sleeping');
    },
    legs: 2,
    hands: 2,
    superPower: "Spider Sense and Web Sense",
    heroName: "Spider Man"
}
console.log(spiderMan); // Log the whole superhero object
spiderMan.sleep(); // Invoke the sleep method
console.log('------------------------------------');

// Define an interface for a Vehicle
interface Vehicle {
    brand: string,
    model: string,
    year: number,
    start: () => void
}

// Use the Vehicle interface for an object
const myCar: Vehicle = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    start: () => {
        console.log('Starting the car');
    }
}
console.log(myCar); // Log the whole vehicle object
myCar.start(); // Invoke the start method


