#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 1, // Base currency
    USD: 278,
    RUB: 3,
    Yuan: 38.43,
    INR: 3.34,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["PKR", "USD", "RUB", "Yuan", "INR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["PKR", "USD", "RUB", "Yuan", "INR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from]; // Exchange rate
let toAmount = currency[userAnswer.to]; //Exchange rate
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; // PKR base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
