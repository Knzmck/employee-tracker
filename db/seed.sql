USE employees_db;

INSERT INTO departments 
    (department_name)
VALUES  
("Upper Management"), 
("HR"), 
("Accounting"), 
("Sales"), 
("Legal"), 
("IT");

INSERT INTO roles 
    (title, salary, department_id)
VALUES 
("Manager", 45000.00, 1),
("Director of HR", 50000.00, 2), 
("Director of Accounting", 50000.00, 3), 
("Director of Sales", 50000.00, 4), 
("Director of Legal", 120000.00, 5), 
("Director of Customer Service", 50000.00, 6),
("Salesman", 52000.00, 4),
("Receptionist", 38000.00, 7);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES 
("Michael", "Scott", 1, 0), 
("Toby", "Flenderson", 2, 1), 
("Angela", "Martin", 3, 1), 
("Dwight", "Schrute", 4, 1), 
("Dianne", "Kelly", 4, 1), 
("Kelly", "Kapoor", 6, 1);