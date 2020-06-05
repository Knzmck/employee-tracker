// Prompt users:
// view all employee
// view employees by department
// View employees by manager
// Add employee
// Remove employee
// update employee role
// update employee manager 
// View all roles

//  id, first name, last name, title, department, salary, manager for each employee

// depending on choice have a switch case scenario 


const inquirer = require("inquirer");
const db = require("./db");

async function mainPrompt() {
    const { userChoice } = await prompt([
        {
            type: "list",
            name: "first",
            message: "Choose an action:",
            choices: [
                {
                    name: "View All Employees"
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
};

switch (userChoice) {
    case value:
        
        break;

    default:
        break;
}