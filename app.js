#! usr/bin/env node
import inquirer from "inquirer";
//1-Computer will generate a random number
//2- User input for guessing number
//3- Compare user's input with computer generated number & show result
const randomNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please, guess a number between 1-10:"
    }
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congradulations! You guessed the right number.");
}
else {
    console.log("You guessed wrong number.");
}
