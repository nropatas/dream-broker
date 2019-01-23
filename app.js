var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
var ffmpeg = require('ffmpeg');
var uuidv1 = require('uuid/v1');
var bodyParser = require('body-parser');
var fs = require('fs');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.engine('handlebars', hbs());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.use('/', indexRouter);

module.exports = app;
