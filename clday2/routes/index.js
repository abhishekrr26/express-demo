var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  book =[
{ name:'Into the Water', author:'Paula Hawkins'},
{name:'The Nightingale',author:'Kristin Hannah'},
{name:'It Ends with Us',author:'Colleen Hoover'}
  ]
   store = 'BOOK STORE'
  
  res.render('index', {book:book,store:store});
});

module.exports = router;
