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
// View all departments 
viewDepartments() {
    return this.connection.query(
        "SELECT * FROM departments"
    )
}

// View all managers
viewManagers () {
    return this.connection.query(
        "SELECT * FROM employee WHERE role_id = 1"
    )
}
// View all employees by manager id
viewEmployeesByManager (manager_id) {
    return this.connection.query(
        "SELECT * FROM employee WHERE manager_id = ?", manager_id
    )
}


};
module.exports = new DB(connection);


