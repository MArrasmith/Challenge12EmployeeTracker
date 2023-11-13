const userPrompts = () => {
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
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                    'Update Employee Manager',
                    'Update Employee Role'
                ]
        }
    ])

        .then((answers) => {
            const { choices } = answers;

            if (choices === 'View All Departments') {
                viewAllDepartments();
            }
            if (choices === 'View All Roles') {
                viewAllRoles();
            }
            if (choices === 'View All Employees') {
                viewAllEmployees();
            }
            if (choices === 'View Employees By Manager') {
                viewEmployeesByManager();
            }
            if (choices === 'Add a Department') {
                addNewDepartment();
            }
            if (choices === 'Add a Role') {
                addNewRole();
            }
            if (choices === 'Add an Employee') {
                addNewEmployee();
            }
            if (choices === 'Update Employee Manager') {
                updateEmployeeManagers();
            }
            if (choices === 'Update Employee Role') {
                updateEmployeeRole();
            }
        });
};
module.exports = userPrompts;