exports.authRequire = (req, res, next) => {
    const isAuth = req.isAuthenticated();
    if (isAuth) {
      return next();
    }
  
    res.redirect('/login');
  };
  
  exports.authNotRequire = (req, res, next) => {
    const isAuth = req.isAuthenticated();
    if (!isAuth) {
      return next();
    }
  
    return next(new Error('You have to log in first'));
  };
  