const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        database: 'employee_tracker',
        user: 'root',
        password: 'Onyx1113',
    },
    console.log(`Welcome to the Employee Database`)
);

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
                    'Add New Department',
                    'Add New Role',
                    'Add New Employee',
                    'Update Employee Role'
                ]
        }
    ])

        .then((answers) => {
            const { options } = answers;

            if (options === 'View All Departments') {
                viewAllDepartments();
            } else if (options === 'View All Roles') {
                viewAllRoles();
            } else if (options === 'View All Employees') {
                viewAllEmployees();
            } else if (options === 'Add New Department') {
                addNewDepartment();
            } else if (options === 'Add New Role') {
                addNewRole();
            } else if (options === 'Add New Employee') {
                addNewEmployee();
            } else if (options === 'Update Employee Role') {
                updateEmployeeRole();
            }
        });
}

const viewAllDepartments = () => {
    console.log('VIEW all department')
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
        if (err)
            console.log(err)
        questions();
    });
};

const viewAllRoles = () => {
    console.log('VIEW all roles')
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
        if (err)
            console.log(err)
        questions();
    });
};

const viewAllEmployees = () => {
    console.log('VIEW all employees')
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
        if (err)
            console.log(err)
        questions();
    });
};
const addNewDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newDepartment',
                message: 'Enter the name of the new department'
            }
        ])
        .then((answers) => {
            db.query(`INSERT INTO department (name) VALUES (?)`, [answers.newDepartment], (err, results) => {
                if (err) throw err;
                console.log(`Added ${answers.newDepartment} to the database.`)
                questions();
            });
        });
};
const addNewRole = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newRole',
                message: 'Enter the name of the new role'
            },
            {
                type: 'input',
                name: 'newRoleSalary',
                message: 'Enter the salary of the new role'
            },
            {
                type: 'input',
                name: 'newRoleDepartment',
                message: 'Enter the department code of the new role'
            }


        ])
        .then((answers) => {
            db.query(`INSERT INTO role (title, salary, department) VALUES (?, ?, ?)`, [answers.newRole, answers.newRoleSalary, answers.newRoleDepartment], (err, results) => {
                if (err) throw err;
                console.log(`Added ${answers.newRole} to the database.`)
                questions();
            });
        });
};
questions();