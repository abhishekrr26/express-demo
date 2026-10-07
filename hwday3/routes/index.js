var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  travel=[
    {name:'Eiffel Tower',country:'France',popular:true},
    {name:'Great wall of China',country:'China',popular:true},
    {name:'Machu picchu',country:'Peru',popular:false}
  ]
  wel='Welcome to the Home page '
  res.render('index',{travel:travel,wel:wel});
});

module.exports = router;
