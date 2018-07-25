require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/seattle-addict', { useMongoClient: true }); //commented out for heroku // "boilerplate" will be name of db
// mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});  // for heroku deployment

// This shows the app where to find the file for the content to load on the page
var index = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var events = require('./routes/events');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //commented out for heroku
// app.use(express.static(path.resolve(__dirname, 'client', 'build'))); //for heroku deployment

app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.currentUser = req.user;
  next();
});

// This assigns a path to the file contents
app.use('/', index); //commented out for heroku deployment
app.use('/users', users);
app.use('/auth', auth);
app.use('/events', events);
// for heroku deployment
// app.get('*', function(req, res, next) {
// 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });
////PACKAGE.JSON ITEM: "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
////PACKAGE.JSON ITEM: PORT=3001 - for non-heroku build

module.exports = app;
