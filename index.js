const { prompt } = require("inquirer");
const db = require("./db");
const logo = require("asciiart-logo");
require("console.table");

initialize();

function initialize() {
    const logoText = logo({ name: "Dunder Mifflin" }).render();
    console.log(logoText);
    mainPrompt();
}
async function mainPrompt() {
    const  userChoice = await prompt([
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
                    name: "Remove Department"
                },
                {
                    name: "Quit"
                }
            ]
        }
    ])
    console.log(userChoice)
    switch (userChoice.first) {
        case ("View All Employees"):
            return viewEmployees()
        case ("View All Roles"):
            return
        case ("View All Departments"):
            return viewDep();
        case ("View All Employees By Manager"):
            return viewManagers();
        case ("Add Employee"):
            return
        case ("Remove Employee"):
            return
        case ("Update Employee Role"):
            return
        case ("Add Department"):
            return
        case ("Remove Department"):
            return
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
    console.log("hiya")
    allEmployees = await db.findAllEmployees();
    console.table(allEmployees);
}

// View Employees for a specific manager function
async function viewManagers(){
    employees = await db.viewManagers();
    var possibleManagers = []
    for (let i = 0; i < employees.length; i++) {
        let manager = {}
        manager.name = employees[i].first_name + ' ' +  employees[i].last_name;
        manager.value = employees[i].id;
        possibleManagers.push(manager);
    }
    const employeesByManager = await prompt ([
        { 
        type: "list",
        name: "managerChoice",
        message: "Choose a Manager to view their employees",
        choices: possibleManagers
        }
    ])
    empByManager = await db.viewEmployeesByManager(employeesByManager.managerChoice);
    
    console.table(empByManager);
}

// View all departments
async function viewDep() {
    dep = await db.viewDepartments();
    console.table(dep);
}