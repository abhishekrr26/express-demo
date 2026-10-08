var express = require('express');
var router = express.Router();
const { validationResult } = require('express-validator');
const userValidationRules = require('../valid/validator');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ errors: [] });
});

router.post('/userinfo',userValidationRules
  ,function(req,res,next){
    errors = validationResult(req);
email = req.body.email;
password=req.body.pass;

if(errors.isEmpty()){
res.render('output',{
  email:email,
  password:password
});

}else{
  res.render('index',{errors:errors.array() })
}
})

module.exports = router;
