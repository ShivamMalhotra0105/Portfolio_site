var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage', { });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { });
});

router.get('/servicespage', function(req, res, next) {
  res.render('servicespage', { });
});

router.get('/projectpage', function(req, res, next) {
  res.render('projectpage', { });
});

router.get('/contactme', function(req, res, next) {
  res.render('contactme', { });
});

module.exports = router;
