"use strict";
// Basic Syntax
// function functionName(param1, param2) {
//  function body  
//}
Object.defineProperty(exports, "__esModule", { value: true });
// Define an array of friends
let myFriends = ['aisha', 'zain'];
// Define an array for unfriended people
const unFriends = [];
// Function declaration with a parameter to add a friend
function addFriend(name) {
    // function body
    // Push name to myFriends array
    myFriends.push(name);
}
// Add friends using the addFriend function
addFriend('Hasnain');
addFriend('areesha');
console.log("______________________________________");
// Function with return type to remove a friend
function removeFriend(name) {
    // Temporary array to hold remaining friends
    let myNewFriends = [];
    // Iterate through myFriends array
    for (const friend of myFriends) {
        // If the current friend is not the one to be removed, add to myNewFriends array
        if (friend !== name) {
            myNewFriends.push(friend);
        }
    }
    // Update myFriends array with myNewFriends array
    myFriends = myNewFriends;
    // Return the name of the removed friend
    return name;
}
// Remove a friend and store the removed friend's name
const removedFriend = removeFriend('zain');
// Add the removed friend's name to unFriends array
unFriends.push(removedFriend);
// Log the current state of myFriends and unFriends arrays
console.log('myFriends:', myFriends);
console.log('unFriends:', unFriends);
