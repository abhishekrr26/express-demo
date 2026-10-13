var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/destinations', function(req, res, next) {
  res.render('destinations');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
