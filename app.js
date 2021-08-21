let createError = require('http-errors');
let express = require('express');
const path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let blogRouter = require('./routes/blog');
let appRouter = require('./routes/app');
let csvRouter = require('./routes/csv');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));

app.use('/sts', indexRouter);
app.use('/sts/blog', blogRouter);
app.use('/sts/app', appRouter);
app.use('/sts/csv', csvRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.locals.pretty = true;

module.exports = app;
