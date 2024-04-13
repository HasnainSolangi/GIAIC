## TypeScript Operators 

TypeScript's basic arithmetic operators include addition (+), subtraction (-), multiplication (*), and division (/). These operators perform mathematical calculations such as adding, subtracting, multiplying, and dividing numerical values, allowing for various computations in TypeScript programs.




### Other methods / Examples

### Addition
```Advanced Addition Method

// Define an array of items with their prices
let items: { name: string, price: number }[] = [
    { name: 'flour', price: 10000 },
    { name: 'rice', price: 5000 },
    { name: 'oil', price: 7000 }
];

// Initialize totalAmount to 0
let totalAmount: number = 0;

// Calculate the total amount by looping through the items array
for (let item of items) {
    totalAmount += item.price;
}

// Display the total amount
console.log("Total amount: Rs" + totalAmount);

```

### Subtraction:
```An other method 

// Imagine you have a budget of 5000 rupees for buying fruits.
let budget: number = 5000;

// Prices of different fruits
let bananaPrice: number = 500;
let mangoPrice: number = 1000;
let peachPrice: number = 700;

// Calculate the remaining budget after buying the fruits
let remainingBudget: number = budget - (bananaPrice + mangoPrice + peachPrice);

// Display the remaining budget
console.log("Remaining budget after buying fruits: " + remainingBudget + " rupees");

Result: Remaining budget after buying fruits: 2800 rupees
```

### Multiplication.
```
// Example 1: Calculating the area of a rectangle
let length: number = 10;
let width: number = 5;
let area: number = length * width;
console.log("Area of the rectangle: " + area);

// Example 2: Calculating the total score in a game
let scorePerLevel: number = 100;
let levelsCompleted: number = 5;
let totalScore: number = scorePerLevel * levelsCompleted;
console.log("Total score in the game: " + totalScore);

// Example 3: Calculating the distance traveled
let speed: number = 60; // in miles per hour
let time: number = 2;   // in hours
let distance: number = speed * time;
console.log("Distance traveled: " + distance + " miles");
```

### Division
```
// Example 1: Calculating the cost per person for a meal
let totalCost: number = 120;
let numberOfPeople: number = 6;
let costPerPerson: number = totalCost / numberOfPeople;
console.log("Cost per person for the meal: $" + costPerPerson);

// Example 2: Calculating the speed of a moving object
let distance: number = 600; // in miles
let time: number = 2;       // in hours
let speed: number = distance / time;
console.log("Speed of the object: " + speed + " miles per hour");

// Example 3: Calculating the tax rate
let totalTax: number = 6000;
let totalIncome: number = 50000;
let taxRate: number = totalTax / totalIncome;
console.log("Tax rate: " + (taxRate * 100) + "%");
```