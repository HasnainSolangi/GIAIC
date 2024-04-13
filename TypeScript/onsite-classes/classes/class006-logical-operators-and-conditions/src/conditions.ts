// Simple if and else conditions examples:

let classDay: string = "Wednesday";

if (classDay === "Wednesday") {

    console.log("Go to class");

} else {

    console.log("Do nothing sleep and have a nice day");
}



// create variables
let distance        : number = 25;      // Increased distance for different transportation options
let moneyIHave      : number = 500;     // change this value to 700 or higher for other alternatives.
let busTicketPrice  : number = 100;
let cabPricePerKm   : number = 25;

// if-else-if-else condition

if (distance <= 5) {
    console.log('Walk to your destination');

} else if (distance <= 15 && moneyIHave >= busTicketPrice) {
    console.log('Take a bus');

} else if (moneyIHave >= distance * cabPricePerKm) {
    console.log('Take a cab');
    
} else {
    console.log('Find an alternative mode of transportation');
}


