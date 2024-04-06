#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: "What would you like to add in your todos?",
            type: "input"
        },
        {
            name: "secondQuestion",
            message: "Would you like to add more in your todos?",
            type: "confirm",
            default: "true"
        }
    ]);
    todos.push(answer.firstQuestion);
    console.log(todos);
    condition = answer.secondQuestion;
}
;
