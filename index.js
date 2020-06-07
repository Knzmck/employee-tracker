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
                    name: "View All Employees",
                    value: "View All Employees"
                },
                {
                    name: "View All Employees By Department"
                },
                {
                    name: "View All Employees By Manager"
                },
                {
                    name: "Add Employee"
                },
                {
                    name: "Remove Employee"
                },
                {
                    name: "Update Employee Role"
                },
                {
                    name: "Update Employee Manager"
                },
                {
                    name: "View All Roles"
                },
                {
                    name: "Add Role"
                },
                {
                    name: "Remove Role"
                },
                {
                    name: "View All Departments"
                },
                {
                    name: "Add Department"
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
        case ("View All Employees By Department"):
            return console.log ("hello")
        case ("View All Employees By Manager"):
            return viewManagers();
        case ("Add Employee"):
            return
        case ("Remove Employee"):
            return
        case ("Update Employee Role"):
            return
        case ("Update Employee Manager"):
            return
        case ("View All Roles"):
            return
        case ("Add Department"):
            return
        case ("Remove Department"):
            return
        default:
            quit();
    }
}

function quit() {
    console.log("Exiting Program!")
    process.exit();
}

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