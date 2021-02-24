var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Auth0 Webapp sample Nodejs',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.get('/profile', requiresAuth(), function (req, res, next) {
  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });
});

router.get('/home', requiresAuth(), function (req, res, next) {
  res.render('home', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Home page'
  });
});

router.get('/menu-settings', requiresAuth(), function (req, res, next) {
  res.render('menu-settings', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Serting Menu'
  });
});

router.get('/menu-navigation', requiresAuth(), function (req, res, next) {
  res.render('menu-navigation', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Navigation Menu'
  });
});

router.get('/menu-contact', requiresAuth(), function (req, res, next) {
  res.render('menu-contact', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Contact Menu'
  });
});

router.get('/menu-calendar-dates', requiresAuth(), function (req, res, next) {
  res.render('menu-calendar-dates', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Calendar Dates'
  });
});

router.get('/menu-calendar-duty', requiresAuth(), function (req, res, next) {
  res.render('menu-calendar-duty', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Calendar Duty Dates'
  });
});

router.get('/stations', (req, res) => {
  res.render('stations');
});

router.get('/assets', (req, res) => {
  res.render('assets');
});

module.exports = router;
