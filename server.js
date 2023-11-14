const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const userPrompts = require('./public/questions.js')

const PORT = process.env.PORT || 3001;
const app = express();


userPrompts()