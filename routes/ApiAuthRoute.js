const {Router} = require('express');
const {isLogin} = require('../middlewares/AuthMiddleware');
const {
  authLoginHandler,
  authLogoutHandler,
  authRegisterHandler,
  authVerifyHandle,
  authResendVerifyHandle,
  authForgetPasswordHandler,
  authResetPasswordhandler,
} = require('../handlers/AuthHandler');

// eslint-disable-next-line new-cap
const route = Router();

// authetication route
route.post('/register', authRegisterHandler);
route.get('/verify', authVerifyHandle);
route.post('/resend-verify', authResendVerifyHandle);

route.post('/forget-password', authForgetPasswordHandler);
route.get('/reset-password', authResetPasswordhandler);

route.post('/login', authLoginHandler);
route.get('/logout', isLogin, authLogoutHandler);

// route.get('/google', passport.authenticate('google', {scope: ['email', 'profile']}));

// route.get( '/google/callback', passport.authenticate( 'google', {
//   successRedirect: (req, res) => res.json('login'),
//   failureRedirect: (req, res) => res.json('fail'),
// }));

module.exports = route;
