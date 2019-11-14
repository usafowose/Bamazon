var inquirer = require("inquirer");
var mysql = require("mysql");
var consoleTable = require("console.table"); 

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

connection.query("SELECT * FROM product", function (err, result) {
    if (err) {
        throw err;
    } 
        console.table(result);
        inquirer.prompt([
            {
                type: "input",
                message: "What item would you like to buy?",
                name: "Item ID:",

            },
            {
                type: "input",
                message: "How many would you like to buy?",
                name: "Quantity",

            },

        ])
            .then(function (answers) {
                connection.query("SELECT * FROM product WHERE item_id = ?", [answers["Item ID:"]], function (err, res) {
                    if (err) {
                        throw (err)
                    }
                    console.log(res);
                    var name = res[0].product_name;
                    var sales = res[0].product_sales;
                    var itemPrice = res[0].price;
                    var quantityRem = res[0].stock_quantity;
                    var productSales = res[0].product_sales;
                    console.log(`You want to buy a ${name}. ${name}s cost $${itemPrice}`);

                    var buyItem = function () {
                        // Checking quant ->
                        if (quantityRem < answers.Quantity) {
                            console.log(`Sorry! We dont have enough to sell to you. We only have ${quantityRem} ${name}s  left.`);
                        } else {
                            connection.query("UPDATE product SET ? WHERE item_id = ?", [{ stock_quantity: quantityRem - answers.Quantity, product_sales: productSales + (itemPrice * answers.Quantity) }, answers["Item ID:"]], function (err, res) {
                                if (err) {
                                    throw err
                                }
                                console.log(res);
                            })
                            quantityRem -= answers.Quantity
                            console.log(`We now have  only ${quantityRem} ${name}s left for purchase.`);
                        }
                        var totalPrice = answers.Quantity * itemPrice
                        console.log(`Total Cost: $${totalPrice}`);
                    }

                    buyItem();
                    console.table(result);


                })
            });


      
    
});




