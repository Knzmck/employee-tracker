USE employees_db;

INSERT INTO departments 
    (department_name)
VALUES  
("Upper Management"), 
("HR"), 
("Accounting"), 
("Sales"), 
("Quality Assurance"), 
("Reception"),
("Supplier Relations"),
("Temporary");


INSERT INTO roles 
    (title, salary, department_id)
VALUES 
("Manager", 45000.00, 1),
("Director of HR", 50000.00, 2), 
("Director of Accounting", 50000.00, 3), 
("Director of Sales", 50000.00, 4), 
("Director of Customer Service", 50000.00, 6),
("Salesman", 52000.00, 4),
("Receptionist", 38000.00, 7),
("Quality Assurance Specialist", 50000.00, 5),
("Accountant", 49000.00, 3),
("Supplier Relations", 49000.00, 7),
("Temp", 35000.00, 8);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES 
("Michael", "Scott", 1, 0), 
("Toby", "Flenderson", 2, 1), 
("Angela", "Martin", 3, 1), 
("Oscar", "Martinez", 9, 1),
("Kevin", "Malone", 9, 1),
("Dwight", "Schrute", 4, 1), 
("Jim", "Halpert", 6, 1),
("Stanley", "Hudson", 6, 1),
("Phyllis", "Vance", 6, 1),
("Creed", "Bratton", 8, 1), 
("Pam", "Beasley", 7, 1 ),
("Kelly", "Kapoor", 5, 1),
("Meredith", "Palmer", 10, 1),
("Ryan", "Howard", 11, 1);