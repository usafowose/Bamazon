var inquirer = require("inquirer");
var mysql = require("mysql");

inquirer.prompt([
    {
        type: "input",
        message: "How old are you",
        name: "Andrew",

    },
    {
        type: "input",
        message: "How old are you",
        name: "Andrew",

    },
    {
        type: "input",
        message: "How old are you",
        name: "Andrew",

    },

])
    .then(function (answers) {
        console.log('Bamazon Customer Loaded');
        console.log(answers);
    })


