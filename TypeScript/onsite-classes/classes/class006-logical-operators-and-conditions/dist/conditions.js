"use strict";
// Simple if and else conditions examples:
let classDay = "Wednesday";
if (classDay === "Wednesday") {
    console.log("Go to class");
}
else {
    console.log("Do nothing sleep and have a nice day");
}
// create variables
let distance = 25; // Increased distance for different transportation options
let moneyIHave = 500; // change this value to 700 or higher for other alternatives.
let busTicketPrice = 100;
let cabPricePerKm = 25;
// if-else-if-else condition
if (distance <= 5) {
    console.log('Walk to your destination');
}
else if (distance <= 15 && moneyIHave >= busTicketPrice) {
    console.log('Take a bus');
}
else if (moneyIHave >= distance * cabPricePerKm) {
    console.log('Take a cab');
}
else {
    console.log('Find an alternative mode of transportation');
}
