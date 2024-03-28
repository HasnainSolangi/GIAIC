import inquirer from "inquirer";
let email = "ha90solangi@gmail.com";
let password = "78650";
let emailAnswer = await inquirer.prompt([{
        name: `email`,
        message: `Enter your email address`,
        type: `string`
    }]);
let passwordAnswer = await inquirer.prompt([{
        name: `password`,
        message: `Enter your password`,
        type: `string`
    }]);
if (emailAnswer.email === email && passwordAnswer.password === password) {
    console.log("Log in successful");
}
else {
    console.log("Invalid email or password");
}
