const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'employee_tracker',
    user: 'root',
    password: 'Onyx1113',
});

module.exports = db;