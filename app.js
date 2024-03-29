var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db=require('./lib/db');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var user=require('./routes/user');
var product=require('./routes/product');
var order=require('./routes/order');
var cart=require('./routes/cart');
const demoNotification = require('./jobs/demo-notification');
const bNotification = require('./jobs/birthdayReminder');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
db.connect();
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user',user);
app.use('/product',product);
app.use('/order',order);
app.use('/cart',cart);
demoNotification.demoCron.start();
bNotification.birthdayCron.start();
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
