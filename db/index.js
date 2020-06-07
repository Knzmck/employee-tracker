var connection = require("./connection");
class DB {
    constructor(connection) {
        this.connection = connection;
    }


// View All Employees 
findAllEmployees() {
    return this.connection.query(
        "SELECT * FROM employee"
    );
}

// View all employees by dep

// View all employees by manager id
viewManagers () {
    return this.connection.query(
        "SELECT * FROM employee WHERE role_id = 1"
    )
}

viewEmployeesByManager (manager_id) {
    return this.connection.query(
        "SELECT * FROM employee WHERE manager_id = ?", manager_id
    )
}

// Add employee to employee table

// Remove an employee

// update employee role

// update employee manager

// View all roles

// Add role

// remove role

// View all departments

// add department

// Remove department

// quit

};
module.exports = new DB(connection);


