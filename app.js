#! //use/bin/env  node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: (chalk.yellowBright.bold.italic("What would you like add in your todos ? ")),
            type: "input",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: (chalk.yellowBright.bold.italic("Would you like to add more in your todo ? ")),
            default: "true",
        },
    ]);
    todos.push(todoQuestion.firstQuestion);
    console.log(todos);
    if (todoQuestion != onmessage) {
        console.log("ERROR");
    }
    condition = todoQuestion.secondQuestion;
}
