DROP DATABASE IF EXISTS bamazon; 

CREATE DATABASE bamazon; 

USE bamazon; 

CREATE TABLE product(
    item_id PRIMARY KEY NOT NULL, 
    product_name VARCHAR(255) NOT NULL, 
    department_id, 
    price FLOAT NOT NULL, 
    stock_quantity INT NOT NILL,
    product_sales NOT NULL,
); 

CREATE TABLE department(
    department_id INT PRIMARY KEY NOT NULL , 
    department_name VARCHAR(255) NOT NULL, 
    over_head_costs INTEGER(10) NOT NULL,  

)