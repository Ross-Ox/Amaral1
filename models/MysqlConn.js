var mysql = require('mysql'); // A variavel mysql faz a requisição/importa modulos © mysql.
var express = require('express'); // A variavel express faz a requisição/importa modulod express.
var app = express();
var http = require('http');
var url = require('url')

// DBPASS must be defined with the database password
// Powershell: $env:DBPASS="password"
// CMD (windows): set DBPASS="password"
// Linux and iOS: export DBPASS="password"
// Heroku: Go to Settings and then to config vars


var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'remotemysql.com',
    user: '8OLTOotyWk',
    password: 'dNcgvJw5fw',
    database: '8OLTOotyWk'
});

module.exports.pool = pool;