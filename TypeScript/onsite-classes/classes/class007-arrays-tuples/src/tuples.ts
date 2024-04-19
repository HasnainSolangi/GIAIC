// Tuple example with type safety

let book: [string, number, boolean] = ["Al-Qur'an", 600, true];

console.log("(Holy Qur'an) The standard Arabic Quran has 604 pages, making it easy to navigate:", book);

// If you need to add more elements to the tuple later, create a new tuple with the additional elements
let modifiedBooks: [string, number, boolean, string, number, boolean] = [...book, "Tafsir al-Tabari", 3000, true];

// Modifying the page count of "Modified Tafsir al-Tabari" to 3000 pages
modifiedBooks[1] = 600;

console.log("Modified books tuple:", modifiedBooks);



// Remove the above code and Uncomment the code below for separate results.

/* Tuple example with type safety 

// Original book tuple
let book: [string, number, boolean] = ["Al-Qur'an", 600, true];
console.log(`Original book tuple: ${book}`);

// If you need to add more elements to the tuple later, create a new tuple with the additional elements
let modifiedBooks: [string, number, boolean] = ["Tafsir al-Tabari", 3000, true];
console.log(`Modified books tuple: ${modifiedBooks}`);

// Combined result
console.log(`Combined tuples of books: [${book}, ${modifiedBooks}]`);

*/