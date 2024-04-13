// Logical operators in TypeScript:

// Using logical AND operator (`&&`):
let isWeekend: boolean = true;
let isSunny: boolean = true;

if (isWeekend && isSunny) {
    console.log('It\'s a sunny weekend! Perfect for outdoor activities.');
} else {
    console.log('It\'s not a sunny weekend. Maybe stay indoors or find other activities.');
}

// Using logical OR operator (`||`):
let hasCoffee: boolean = false;
let hasTea: boolean = true;

if (hasCoffee || hasTea) {
    console.log('I can enjoy a hot beverage.');
} else {
    console.log('I have no hot beverages available.');
}


// Using logical NOT operator (`!`):
let isRaining: boolean = true;

if (!isRaining) {
    console.log('It\'s not raining. You can go outside.');
} else {
    console.log('It\'s raining. Consider staying indoors or bringing an umbrella.');
}

