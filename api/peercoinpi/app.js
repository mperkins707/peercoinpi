var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var dashboardRouter = require('./routes/dashboard');
var transactionsRouter = require('./routes/transactions');

var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/dashboard', dashboardRouter);
app.use('/transactions', transactionsRouter);

module.exports = app;
