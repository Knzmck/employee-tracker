-- Create database for employees

-- create tables for departments(by id), roles(by id), and individual employees

-- id, first name, last name, title, department, salary, manager for each employee 

USE employees_DB

INSERT INTO departments 
    (department_name)
VALUES  
("Upper Management"), 
("HR"), 
("Accounting"), 
("Sales"), 
("Legal"), 
("IT"),

INSERT INTO roles 
    (title, salary, department_id)
VALUES 
("Manager", 42000.00, 1),
("Director of HR", 50000.00, 2), 
("Director of Accounting", 50000.00, 3), 
("Director of Sales", 50000.00, 4), 
("Director of Legal", 120000.00, 5), 
("Director of Customer Service", 50000.00, 6)

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES 
("Michael", "Scott", 1, 1), 
("Toby", "Flenderson", 2, 2), 
("Angela", "Martin", 3, 2), 
("Dwight", "Schrute", 4, 2), 
("Dianne", "Kelly", 4 2), 
("Kelly", "Kapoor", 6, 2)