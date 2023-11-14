const inquirer = require('inquirer');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices:
                [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'View Employees by Manager',
                    'Add New Department',
                    'Add New Role',
                    'Add New Employee',
                    'Update Employee Manager',
                    'Update Employee Role'
                ]
        }
    ])
        .then((answers) => {
            const { choices } = answers;

            if (choices === 'View All Departments') {
                viewAllDepartments();
            } else if (choices === 'View All Roles') {
                viewAllRoles();
            } else if (choices === 'View All Employees') {
                viewAllEmployees();
            } else if (choices === 'View Employees By Manager') {
                viewEmployeesByManager();
            } else if (choices === 'Add New Department') {
                addNewDepartment();
            } else if (choices === 'Add New Role') {
                addNewRole();
            } else if (choices === 'Add New Employee') {
                addNewEmployee();
            } else if (choices === 'Update Employee Manager') {
                updateEmployeeManager();
            } else if (choices === 'Update Employee Role') {
                updateEmployeeRole();
            }
        });
};


module.exports = questions()