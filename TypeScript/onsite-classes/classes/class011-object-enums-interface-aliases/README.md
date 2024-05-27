# Understanding TypeScript: Object Types, Enums, Type Aliases, and Interfaces.🔍📝

This repository contains examples of how to define and use objects and enums in TypeScript.

## Table of Contents 📑
A)
- [Object](#object) 🏷️
- [NaN Issue and Its Resolution](#example-demonstrating-NaN-issue-with-arrow-functions) 🚫🔄
B)
- [Enums](#enums) 🧮
- [Mixing Types](#mixing-types) 🤹‍♂️
- [Key Points](#key-points) 🔑
C)
- [Interfaces](Interfaces) 🔌
- [Type Aliases](Type-Aliases) 🔤

## Object 🏷️

- In TypeScript, an object is a data structure that holds key-value pairs, where each key is a string (or a Symbol) and each value can be of any data type, including other objects.
Objects can be defined using object literals {} and can have properties and methods.

- Object Types: These are used to define the structure of an object with specific properties and their types.
Object types help ensure that objects adhere to a consistent structure, which improves code reliability and readability.

**NOTE:** Refer to the Object source code file for clarity. Here, you will find only one example demonstrating the NaN issue.

### Example Demonstrating NaN Issue with Arrow Functions 🚫

```
const personTwo = {
    // key: "value"
    firstName: "Isfhan", // properties
    LatName: "Ahmed",    // properties
    age: 28,
    country: "Pakistan",
    city: "Karachi",
    married: true,
    fullName: function () {
        console.log('Logging this object:', this); // log this object
        console.log(this.firstName + " " + this.LatName); // log full name
    },
    getBirthYear: () => { // arrow function will return NaN
        console.log('Logging this in arrow function:', this); // log this object
        console.log('Age property:', this.age); // log undefined because of arrow function
        return 2024 - this.age; // return NaN
    }
}

// Invoke personTwo method
personTwo.fullName(); // Correctly logs the full name

// Invoke personTwo method that causes NaN
console.log('Birth Year:', personTwo.getBirthYear()); // Will return NaN because of arrow function

// Update personTwo property
personTwo.age = 25;

console.log('Updated personTwo object:', personTwo);

console.log('------------------------------------');
```

### Correcting the NaN Issue 🔄
To fix the issue, the getBirthYear method should be a regular function instead of an arrow function:

```
const personTwoCorrected = {
    // key: "value"
    firstName: "Isfhan", // properties
    LatName: "Ahmed",    // properties
    age: 28,
    country: "Pakistan",
    city: "Karachi",
    married: true,
    fullName: function () {
        console.log('Logging this object:', this); // log this object
        console.log(this.firstName + " " + this.LatName); // log full name
    },
    getBirthYear: function() { // regular function to correctly bind this
        console.log('Logging this in regular function:', this); // log this object
        console.log('Age property:', this.age); // correctly log age
        return 2024 - this.age; // correctly calculate birth year
    }
}

// Invoke personTwoCorrected methods
personTwoCorrected.fullName(); // Correctly logs the full name
console.log('Birth Year:', personTwoCorrected.getBirthYear()); // Correctly calculates birth year

// Update personTwoCorrected property
personTwoCorrected.age = 25;

console.log('Updated personTwoCorrected object:', personTwoCorrected);

console.log('------------------------------------');

```
In this corrected version, getBirthYear is a regular function, ensuring that this correctly refers to personTwoCorrected, allowing it to access the age property and perform the calculation correctly.

In the given code, `personTwo` is an `object` with properties and methods.
The method `fullName` correctly logs the `firstName` and `LatName` properties because it uses a regular `function`, which binds `this` to the calling object (`personTwo`).
However, the `getBirthYear` method is an `arrow function`, and arrow functions do not bind their own `this` value. Instead, they inherit `this` from the parent scope at the time they are defined.
In this case, the parent scope is likely the global scope, where `this` does not have an `age` property, leading to `this.age` being `undefined`.
When the expression `2024 - this.age` is evaluated, it becomes `2024 - undefined,` which results in `NaN` (Not a Number).
___

## Enums 🧮

**What are enums in TypeScript?**
- Imagine a box that can only hold a specific set of items. Enums in TypeScript are like these boxes.
They define a collection of fixed values, also called constants, that you can use throughout your code. These constants make your code easier to understand and less prone to errors.

### Types of Enums:

**Numeric Enums**: By default, enums use numbers. The first value starts at 0, and the others automatically increase by 1. You can also explicitly set the value for the first member, and the rest will follow a sequence.

**String Enums**: Instead of numbers, you can use text for the constants in your enum. This is often preferred for better readability.

- Example of a numeric enum:

```TypeScript
enum CardinalDirections {
  North,  // implicitly assigned 0
  East,   // implicitly assigned 1
  South,  // implicitly assigned 2
  West    // implicitly assigned 3
}

let currentDirection = CardinalDirections.North;
console.log(currentDirection); // Outputs 0
Use code with caution.
content_copy
```
- Example of a string enum:

```TypeScript
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
}

console.log(CardinalDirections.North); // Outputs "North"
Use code with caution.
content_copy

```
**Enums Examples:**

1) ### Day of the Week

```
enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getWeekendGreeting(day: Weekday) {
  if (day === Weekday.Saturday || day === Weekday.Sunday) {
    return "Enjoy your weekend!";
  } else {
    return "Have a productive week!";
  }
}

console.log(getWeekendGreeting(Weekday.Tuesday));  // Outputs "Have a productive week!"
console.log(getWeekendGreeting(Weekday.Saturday)); // Outputs "Enjoy your weekend!"

```

2) ### User Roles

```
enum Role {
  Admin = 'admin',
  Editor = 'editor',
  Reader = 'reader',
}

function checkAuthorization(role: Role, permission: string) {
  const permissions = {
    admin: ['create', 'edit', 'delete'],
    editor: ['edit'],
    reader: ['view'],
  };

  if (permissions[role].includes(permission)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAuthorization(Role.Admin, 'edit'));    // Outputs true (admin can edit)
console.log(checkAuthorization(Role.Reader, 'delete')); // Outputs false (reader cannot delete)

```

3) ### HTTP Status Codes

```
enum StatusCode {
  OK = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}

function handleResponse(statusCode: StatusCode) {
  switch (statusCode) {
    case StatusCode.OK:
      console.log("Request successful!");
      break;
    case StatusCode.BadRequest:
      console.log("Invalid request!");
      break;
    // Handle other status codes
  }
}

handleResponse(StatusCode.OK);  // Outputs "Request successful!"
handleResponse(StatusCode.NotFound); // Outputs "Invalid request!" (modify case to handle this code)

```

**These examples demonstrate how enums can be used to represent various types of constant values, improving code readability and maintainability.** 📊

**Mixing Types:** 🤹‍♂️

While technically possible, it's generally recommended to stick to either numeric or string values within a single enum for better clarity.

**Key Points**: 🔑

- Enums provide a way to define fixed sets of constants.
- They can be numeric or string-based.
- String enums are preferred for readability.
- Avoid mixing numeric and string values in the same enum.
___

## Type Aliases 🔤
- Type aliases are used to create a new name for a type. They can simplify complex type definitions and make code more readable by providing a meaningful name for a type.

**Example**
```
// Define a type alias for a string or number array
type ID = string | number;

// Use the ID alias for variable declarations
let userId: ID = 123;
let postId: ID = "abc123";

console.log(userId); // Output: 123
console.log(postId); // Output: abc123

```
___
In this example, `ID` is a type alias for a string or number. It simplifies the declaration of variables that can hold either a string or a number value.
___

## Interfaces 🔌
- Interfaces define the structure of an object, similar to object types, but they are more flexible. Interfaces can be extended and merged, allowing for greater flexibility and reuse of type definitions.

**Example**
```
// Define an interface for a User object
interface User {
    name: string;
    age: number;
    email: string;
    isAdmin?: boolean; // Optional property
}

// Use the User interface for an object
let user: User = {
    name: "Hasnain Ahmed",
    age: 25,
    email: "hasnain@example.com"
};

console.log(user); // Output: { name: "Hasnain Ahmed", age: 25, email: "hasnain@example.com" }

```
___
In this example, `User` is an interface defining the structure of a user object with properties `name`, `age`, and `email`.
The `isAdmin` property is optional. The `user` object conforms to this interface, ensuring that it has the required properties defined by the interface.
___


**This concludes the explanation and examples of TypeScript object types, enums, type aliases, and interfaces. If you have any further questions or need clarification on any topic, feel free to reach out. Happy coding!** 🌟🚀

[LinkedIn - Hasnain Ahmed](https://www.linkedin.com/in/hasnainahmed90s/) 🔗<br>
[Governor Sindh Initiative for GenAI, Web3, and Metaverse](https://www.linkedin.com/company/governor-sindh-initiative/mycompany/)