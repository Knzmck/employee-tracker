-- Create database for employees

-- create tables for departments(by id), roles(by id), and individual employees

-- id, first name, last name, title, department, salary, manager for each employee 

USE employees_DB

INSERT INTO departments (department_name)
VALUES ("HR"), ("Accounting"), ("Sales"), ("Legal"), ("IT")

INSERT INTO roles (title, salary, department_id)
VALUES ("Director of HR", 50000.00, 1), ("Director of Accounting", 50000.00, 2), ("Director of Sales", 50000.00, 3), ("Director of Legal", 50000.00, 4), ("Director of IT", 50000.00, 5)

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 