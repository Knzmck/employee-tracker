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
    viewManagers() {
        return this.connection.query(
            "SELECT * FROM employee WHERE role_id = 1"
        )
    }
    // View all employees by manager id
    viewEmployeesByManager(manager_id) {
        return this.connection.query(
            "SELECT * FROM employee WHERE manager_id = ?", manager_id
        )
    }
    // View all roles 
    findAllRoles() {
        return this.connection.query(
            "SELECT * FROM roles"
        )
    }
    // Add new employee to db 
    addNewEmployee(employee) {
        return this.connection.query(
            "INSERT INTO employee SET ?", employee
        )
    }
    // Add new department to db
    addNewDepartment(department) {
        return this.connection.query(
            "INSERT INTO departments SET ?", department
        )
    }
    // Remove department from db
    removeDepartment(departmentId) {
        return this.connection.query(
            "DELETE FROM departments WHERE department_name = ?", departmentId
        )
    }
    removeEmployeeFromDB(employeeId) {
        return this.connection.query(
            "DELETE FROM employee WHERE id = ?", employeeId
        )
    }
    // Update the given employee's role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [roleId, employeeId]
        );
    }
};
module.exports = new DB(connection);


