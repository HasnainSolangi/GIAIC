"use strict";
// Tuple example with type safety
let book = ["Al-Quran", 600, true];
console.log("(Holy Quran) The standard Arabic Quran has 604 pages, making it easy to navigate:", book);
// If you need to add more elements to the tuple later, create a new tuple with the additional elements
let modifiedBooks = [...book, "Tafsir al-Tabari", 3000, true];
// Modifying the page count of "Modified Tafsir al-Tabari" to 3000 pages
modifiedBooks[1] = 600;
console.log("Modified books tuple:", modifiedBooks);
// Uncomment for an other method
/* Tuple example with type safety
let book: [string, number, boolean] = ["Al-Quran", 600, true];

// Log a message to the console for the original book tuple
console.log("(Holy Quran) The standard Arabic Quran has 604 pages, making it easy to navigate:", book);

// If you need to add more elements to the tuple later, create a new tuple with the additional elements
let modifiedBooks: [string, number, boolean] = ["Tafsir al-Tabari", 3000, true];

// Log the modified books tuple
console.log("Modified books tuple:", modifiedBooks);

// Combined result
console.log("Combined tuples of books:", [book, modifiedBooks]);
*/
