// File Name: JAVASCRIPT DOCUMENT
// Author Name: Shivam Malhotra
//Website Name: Portfolio Site
//File Description: User File


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
