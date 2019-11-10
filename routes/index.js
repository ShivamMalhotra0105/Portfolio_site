// File Name: JAVASCRIPT DOCUMENT
// Author Name: Shivam Malhotra
//Website Name: Portfolio Site
//File Description: ALL ROUTES FILE


var express = require('express');
var router = express.Router();
const { authRequire } = require('../models/status');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome To Shivam\'s Portfolio' });
 
});

/* GET home page. */
router.get('/homepage', function(req, res, next) {
  res.render('homepage', { });

});
/* GET aboutme page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { });
 
});
/* GET services page. */
router.get('/servicespage', function(req, res, next) {
  res.render('servicespage', { });
  
});
/* GET project page. */
router.get('/projectpage', function(req, res, next) {
  res.render('projectpage', { });
 
});
/* GET contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { });
  
});

module.exports = router;
