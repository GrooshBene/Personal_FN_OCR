//Formal Configuration of Express
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var properties = require('properties');
var cons = require('consolidate');

//Database Connection
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/ocrtest');
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function(){
//	console.log("DB Connected!");
//});

//Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var trainRouter = require('./routes/train');
var inputRouter = require('./routes/input');

//App Variable Definition
var app = express();

// view engine setup
app.engine('html', cons.swig);
app.engine('pug', cons.pug);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//app middleware setting
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Basic Routing routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/train', trainRouter);
app.use('/input', inputRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);  
  res.render('error');
});

module.exports = app;
