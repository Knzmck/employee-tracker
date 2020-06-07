const { prompt } = require("inquirer");
const db = require("./db");
const logo = require("asciiart-logo");
require("console.table");

initialize();

function initialize() {
    const logoText = logo({ name: "Dunder Mifflin Scranton Branch" }).render();
    console.log(logoText);
    mainPrompt();
}
async function mainPrompt() {
    const userChoice = await prompt([
        {
            type: "list",
            name: "first",
            message: "Choose an action:",
            choices: [
                {
                    name: "View All Employees"
                },
                {
                    name: "View All Roles"
                },
                {
                    name: "View All Departments"
                },
                {
                    name: "View All Employees By Manager"
                },
                {
                    name: "Add Employee"
                },
                {
                    name: "Add Role"
                },
                {
                    name: "Add Department"
                },
                {
                    name: "Update Employee Role"
                },
                {
                    name: "Remove Employee"
                },
                {
                    name: "Remove Role"
                },
                {
                    name: "Remove Department"
                },
                {
                    name: "Quit"
                }
            ]
        }
    ])
    switch (userChoice.first) {
        case ("View All Employees"):
            return viewEmployees()
        case ("View All Roles"):
            return viewRoles();
        case ("View All Departments"):
            return viewDep();
        case ("View All Employees By Manager"):
            return viewManagers();
        case ("Add Employee"):
            return addEmployee();
        case ("Add Department"):
            return addNewDep();
        case("Add Role"):
            return addNewRole();
        case ("Update Employee Role"):
            return updateEmployeeRole();
        case ("Remove Department"):
            return removeDep();
        case ("Remove Employee"):
            return removeEmployee();
        case ("Remove Role"):
            return removeRole();
        default:
            quit();
    }
}
// function to exit program
function quit() {
    console.log("Exiting Program!")
    process.exit();
}
// View all employees from employee table
async function viewEmployees() {
    allEmployees = await db.findAllEmployees();
    console.table(allEmployees);
    mainPrompt();
}

// View Employees for a specific manager function
async function viewManagers() {
    employees = await db.viewManagers();
    var possibleManagers = []
    for (let i = 0; i < employees.length; i++) {
        let manager = {}
        manager.name = employees[i].first_name + ' ' + employees[i].last_name;
        manager.value = employees[i].id;
        possibleManagers.push(manager);
    }
    const employeesByManager = await prompt([
        {
            type: "list",
            name: "managerChoice",
            message: "Choose a Manager to view their employees",
            choices: possibleManagers
        }
    ])
    empByManager = await db.viewEmployeesByManager(employeesByManager.managerChoice);

    console.table(empByManager);
    mainPrompt();
}

// View all departments
async function viewDep() {
    dep = await db.viewDepartments();
    console.table(dep);
    mainPrompt();
}

// View all roles 
async function viewRoles() {
    roles = await db.findAllRoles();
    console.table(roles);
    mainPrompt();
}
// Add Employee
async function addEmployee() {
    const roles = await db.findAllRoles();

    const employee = await prompt([
        {
            name: "first_name",
            message: "Enter the employee's first name:"
        },
        {
            name: "last_name",
            message: "Enter the employee's last name:"
        }
    ]);
    // Choosing a role for this employee
    var roleChoices = []
    for (let i = 0; i < roles.length; i++) {
        let roleChoice = {}
        roleChoice.name = roles[i].title;
        roleChoice.value = roles[i].id;
        roleChoices.push(roleChoice);
    }
    const { roleId } = await prompt([
        {
            type: "list",
            name: "roleId",
            message: "Chose a role for this employee:",
            choices: roleChoices
        }
    ]);
    employee.role_id = roleId;

    // Choosing a manager for this employee
    employees = await db.viewManagers();
    var possibleManagers = []
    for (let i = 0; i < employees.length; i++) {
        let manager = {}
        manager.name = employees[i].first_name + ' ' + employees[i].last_name;
        manager.value = employees[i].id;
        possibleManagers.push(manager);
    }
    const { managerId } = await prompt([
        {
            type: "list",
            name: "managerId",
            message: "Chose a manager for this employee",
            choices: possibleManagers
        }
    ])
    employee.manager_id = managerId;
    console.log(employee)
    // Add employee info to database
    await db.addNewEmployee(employee);
    // To view the updated version of the database
    viewEmployees();
    console.log("New employee added to database!");
}

// Add new Department
async function addNewDep() {
    const department = await prompt([
        {
            name: "department_name",
            message: "Enter name of new department"
        }
    ])
    await db.addNewDepartment(department)
    viewDep()
    console.log("department added!")
}

// Remove Department 
async function removeDep() {
    departments = await db.viewDepartments();
    const allDepartments = [];
    for (let i = 0; i < departments.length; i++) {
        let department = {}
        department.name = departments[i].department_name;
        department.id = departments[i].id;
        allDepartments.push(department)
    }
    const { departmentId } = await prompt([
        {
            type: "list",
            name: "departmentId",
            message: "What department would you like to remove?",
            choices: allDepartments
        }
    ])
    await db.removeDepartment(departmentId);
    viewDep();
    console.log("You've removed the selected department");
}

// Remove Employee
async function removeEmployee() {
    employees = await db.findAllEmployees();
    const allEmployees = [];
    for (let i = 0; i < employees.length; i++) {
        let employee = {}
        employee.name = employees[i].first_name + ' ' + employees[i].last_name;
        employee.value = employees[i].id;
        allEmployees.push(employee)
    }
    const { employeeId } = await prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee would you like to remove?",
            choices: allEmployees
        }
    ])
    await db.removeEmployeeFromDB(employeeId)
    console.log("Selected employee successfully removed from database")
    viewEmployees();
}

// Update Employee Role

async function updateEmployeeRole() {
    // Chose Employee
    employees = await db.findAllEmployees();
    const allEmployees = [];
    for (let i = 0; i < employees.length; i++) {
        let employee = {}
        employee.name = employees[i].first_name + ' ' + employees[i].last_name;
        employee.value = employees[i].id;
        allEmployees.push(employee)
    }
    const { employeeId } = await prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Selected an employee to update their role:",
            choices: allEmployees
        }
    ])

    // Update Role
    const roles = await db.findAllRoles();

    var roleChoices = []
    for (let i = 0; i < roles.length; i++) {
        let roleChoice = {}
        roleChoice.name = roles[i].title;
        roleChoice.value = roles[i].id;
        roleChoices.push(roleChoice);
    }
    const { roleId } = await prompt([
        {
            type: "list",
            name: "roleId",
            message: "Chose a role for this employee:",
            choices: roleChoices
        }
    ]);

    await db.updateEmployeeRole(employeeId, roleId);
    console.log("Employee's role successfully updated!");
    viewEmployees();
}

async function addNewRole() {
    departments = await db.viewDepartments();
    const allDepartments = [];
    for (let i = 0; i < departments.length; i++) {
        let department = {}
        department.name = departments[i].department_name;
        department.value = departments[i].id;
        allDepartments.push(department)
    }
    const role = await prompt([
        {
            name: "title",
            message: "Enter the title of new role:",
        },
        {
            name: "salary",
            message: "Enter yearly salary of new role:",
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department does this role belong to?",
            choices: allDepartments
        }
    ])
    console.log(role)
    await db.createRole(role);
    console.log("New role successfully added!")
    viewRoles();
}

// Remove Role
async function removeRole() {
    const roles = await db.findAllRoles();
    var roleChoices = []
    for (let i = 0; i < roles.length; i++) {
        let roleChoice = {}
        roleChoice.name = roles[i].title;
        roleChoice.value = roles[i].id;
        roleChoices.push(roleChoice);
    }
    // Choose a role to delete
    const { roleId } = await prompt([
        {
            type: "list",
            name: "roleId",
            message: "Chose a role to remove:",
            choices: roleChoices
        }
    ]);
    await db.deleteRole(roleId);
    console.log("Role Successfully removed from database!");
    viewRoles();
}
