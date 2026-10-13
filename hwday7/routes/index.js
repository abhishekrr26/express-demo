var express = require('express');
var router = express.Router();
const user= require('../model/model');
const session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/form', function(req, res, next) {
  res.render('form');
});

router.post('/thank', function(req, res, next) {
 const {name,page}=req.body
 const book=new user({
name,page
 }
)
book.save();
 req.session.userData = { name, page }
 /// oru value vere page le use akkan vendii 
res.render('thank');
});

router.get('/title', (req, res) => {
  res.render('title', { a: req.session.userData.name });
  // aa name pass avum
});

router.get('/page', (req, res) => {
  res.render('page', { b: req.session.userData.page });
  // aa number pass avum
});



module.exports = router;
