# TypeScript OOP Object Oriented Programming.

## Overview

This repository contains TypeScript examples that illustrate Object Oriented Programming (OOP) principles.


**TypeScript example demonstrating Object Oriented Programming (OOP) principles. OOP stands for Object Oriented Programming, A paradigm that uses classes and objects to model real-world entities and their relationships. It promotes code reusability, modularity, and scalability, making it fundamental in software development.**


## Four Pillars of OOP

Object Oriented Programming (OOP) is based on four fundamental principles, known as the four pillars of OOP:

1. **Encapsulation**:
   - Definition: Encapsulation refers to the bundling of data (properties) and methods (functions) that operate on the data into a single unit (class).
   - Example: In a `Product` class, encapsulation ensures that only relevant data (like `name`, `price`) and methods (like `getProductDetails`) are exposed, hiding the implementation details from users.

2. **Abstraction**:
   - Definition: Abstraction focuses on hiding complex implementation details and showing only the necessary features of an object.
   - Example: A `Shape` class may have methods like `calculateArea()` and `draw()`, abstracting away the specific details of how these operations are performed for different shapes.

3. **Inheritance**:
   - Definition: Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass), promoting code reuse and establishing a hierarchical relationship between classes.
   - Example: An `Animal` class can be a superclass, and classes like `Cat` and `Dog` can inherit properties and methods from `Animal`, while adding their own specific behaviors.

4. **Polymorphism**:
   - Definition: Polymorphism refers to the ability of objects to take multiple forms, allowing methods to be defined in a superclass and overridden in subclasses to provide specific implementations.
   - Example: A `Vehicle` superclass may have a `drive()` method, which is implemented differently in subclasses like `Car` and `Bicycle` to accommodate their specific functionalities.

## Examples

### Animal Class Example

- Define an `Animal` class with properties `name` and `age`.
- Create instances of `Animal` such as `cat` and `dog`.
- Access properties like `name` and invoke methods like `speak()` to demonstrate functionality.

### Product Class Example

- Define a `Product` class with properties `name`, `price`, and a private `productId`.
- Create instances of `Product` such as `laptop` and `smartphone`.
- Access properties like `name` and invoke methods like `getProductDetails()` to demonstrate functionality.

## Usage

To understand these examples:

1. Review the TypeScript files containing the examples.
2. Compile and execute the TypeScript code (`tsc`) to see OOP principles in action.
3. Observe the console output to grasp how encapsulation, inheritance, polymorphism, and abstraction are applied.

## Contributions

Contributions are welcome! Fork the repository, add your examples or improvements, and submit a pull request.

*Happy Coding*