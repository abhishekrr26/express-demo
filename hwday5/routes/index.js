var express = require('express');
var router = express.Router();
const User =require('../model/model');
 const valid=require('../validators/valid')
const { validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{error:[]});
});


router.post('/product',
  valid,
  function(req,res,next){
    const {name,price,description}=req.body;
   error= validationResult(req);
const newproduct= new User({
  name,
  price,
  description,
});

console.log(error)
if(error.isEmpty()){
newproduct.save()
.then(()=>{
res.render('home');
console.log('product added');
})
.catch((error)=>{
console.log('error')
})

}else{
  res.render('index',{error:error.array() })
}
})











module.exports = router;
