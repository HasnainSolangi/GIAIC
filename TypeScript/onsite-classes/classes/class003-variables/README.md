# Understanding Variables in TypeScript


## varibale-let-reassign

In your code, you're assigning new values to the `hasnain` variable successively. Each assignment overwrites the previous value, so only the last assigned value, "Nihaari", is retained when you log `hasnain`. If you want to show all the assigned values, you need to log them after each assignment.

### Here's how you can modify your code to achieve that:

```
let hasnain: string = "favoriteFoods";
console.log(hasnain); // Output: favoriteFoods

hasnain = "Biryani";
console.log(hasnain); // Output: Biryani

hasnain = "Daal Chaawal";
console.log(hasnain); // Output: Daal Chaawal

hasnain = "Nihaari";
console.log(hasnain); // Output: Nihaari
```

This way, you log the value of `hasnain` after each assignment, showing all the assigned values 

## varibale-let


In your TypeScript code, you're attempting to declare the variable `hasnain` multiple times using the `let` keyword.
However, TypeScript, like JavaScript, does not allow redeclaration of variables within the same scope.
As a result, the TypeScript compiler will throw an error for this code.
To resolve this issue, you should either use a different variable name or remove the redundant declarations.


## variable-const

This code demonstrates the use of the const keyword to declare a constant variable `favoriteColor` with the value "Black". Attempting to re-assign or re-declare `favoriteColor` will result in an error, ensuring its immutability.


## variable-var

This TypeScript code demonstrates the behavior of variable re-declaration using the 'var' keyword. <p>
Despite 'var' allowing re-declaration within the same scope, the subsequent declarations overwrite the previous ones.<p>
In this example, `nain` is initially declared with the value `Ahmed` and then re-declared with `Solangi`, resulting in both console.log statements printing `Solangi`.
