const express = require('express');
const mysql = require('mysql2');

const fs = require('fs');
const questions = require('./public/questions.js');



questions();

const db = mysql.createConnection(
    {
        host: 'localhost',
        database: 'employee_tracker',
        user: 'root',
        password: 'Onyx1113',
    },
    console.log(`Welcome to the Employee Database`)
  );

  module.exports = db