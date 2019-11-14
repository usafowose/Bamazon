var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "192.168.99.100",
    port: "3306",
    user: "root",
    password: "docker",
    database: "bamazon"
})

connection.connect(function (err, res) {
    if (err) {
        throw err;
    }
    else {
        console.log("Connection Made");
    }
});

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


