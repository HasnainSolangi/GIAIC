// Callbacks
// Define a simple function with a parameter
function myCallback(text) {
    console.log("Inside myCallback: " + text);
}
// Function that takes a function as a parameter
function callingFunction(initialText, callback) {
    console.log('Hasnain Ahmed');
    callback(initialText);
}
// Invoke the function with an argument and a callback function (first way)
callingFunction("Hello World", myCallback);
// Invoke the function with an argument and a callback function (second way with arrow function)
callingFunction("Hello World", function (text) {
    console.log("Second way with arrow function callback: " + text);
});
// Invoke the function with an argument and a callback function (third way with function keyword)
callingFunction("Hello World", function (text) {
    console.log("Custom callback with function keyword: " + text);
});
