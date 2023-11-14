const express = require('express');
const mysql = require('mysql2');

const fs = require('fs');
const questions = require('./public/questions.js');

const PORT = process.env.PORT || 3001;
const app = express();


questions();