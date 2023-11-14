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
            if (choices === 'Add New Department') {
                addNewDepartment();
            }
            if (choices === 'Add New Role') {
                addNewRole();
            }
            if (choices === 'Add New Employee') {
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