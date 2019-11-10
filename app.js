// File Name: JAVASCRIPT DOCUMENT
// Author Name: Shivam Malhotra
//Website Name: Portfolio Site
//File Description: Npm Express Packages Javascript File


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
var flash = require('connect-flash');

//connection string mongodb
mongoose.connect('mongodb+srv://lab03:lab03@cluster0-rywvp.mongodb.net/test?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true}
 );

 var db = mongoose.connection;
 db.on('error', () => console.log("Error Connecting to mongo db"));
 db.once('open', () => console.log("Connected to MongoDB"));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret : 'unicorn', resave : false,saveUninitialized : true}));

app.use(flash());

//passport init
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.userLoggedIn = req.isAuthenticated();
  res.locals.user = req.user;

  if (req.isAuthenticated()) {
    res.locals.role = req.user.role;
  } else {
    res.locals.role = null;
  }

  next();
});

app.post('/contactme', function (req, res) {
  var mailOpts, smtpTrans;

  //Mail options
  mailOpts = {
  from: req.body.name + req.body.email,
  to: 'xxxxxxxxxxxx@gmail.com',
  subject: req.body.email + '  --Msg from contactme-form',
  text: "Name: " + req.body.name + "Email: "  + req.body.email + 
        "Contact No:  " + req.body.contactNo + "QUERY: " + req.body.message
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
  //Alert on event of message sent succeeds or fail.
  if (error) {
    res.render('contactme',{msg : 'Error!', err : true});
  }
  else {
    res.render('contactme',{msg : 'Message sent! ', err : false});
  }
  smtpTrans.close();
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', authRouter);


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
