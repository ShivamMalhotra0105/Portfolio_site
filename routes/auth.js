const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');


router.get('/login', (req, res, next) => {
  res.render('auth/login', { error: req.flash('error') });
});

router.post(
  '/login',
  passport.authenticate('local', {
    failureFlash: 'There was an issue with your username or password',
    failureRedirect: '/login',
    successRedirect: '/'
  })
);

router.get('/register', (req, res, next) => {
  res.render('auth/register', {});
});


router.post('/register', (req, res, next) => {
  
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function(err, account) {
      if (err) {
        
        console.log(err);
        return res.render('register', { account: account });
      }

    
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    }
  );
});

module.exports = router;