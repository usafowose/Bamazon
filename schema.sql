DROP DATABASE IF EXISTS bamazon; 

CREATE DATABASE bamazon; 

USE bamazon; 

CREATE TABLE product(
    item_id,
    product_name VARCHAR(255) NOT NULL, 
    department_name, 
    price, 
    stock_quantity,
); 

CREATE TABLE department(
    department_id, 
    department_name, 
    over_head_costs INTEGER(10),  

)