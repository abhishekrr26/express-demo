var express = require('express');
var router = express.Router();
const { validationResult } = require('express-validator');
const userValidationRules = require('../validator/valida');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{error:[]});
});


router.post('/userdata',userValidationRules,
  function(req,res,next){

    error=validationResult(req) 
  name=req.body.name
  email=req.body.email
  password=req.body.password

if(error.isEmpty()){

  res.render('user',{
    name:name,
    email:email,
    password:password
  })
}else{
res.render('index',{error:error.array() })
}
})

module.exports = router;
