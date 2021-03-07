var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var monteRouter = require('./routes/monte_carlo');
var monte2Router = require('./routes/monte_carlo2');

var app = express();

var cors = require('cors');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({limit: '500mb', extended: true}));
app.use(express.urlencoded({limit: '500mb', extended: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/monteCarlo', cors(), monteRouter);
app.use('/monteCarlo2', cors(), monte2Router);

module.exports = app;
