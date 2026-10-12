var express = require('express');
var router = express.Router();
const Product= require('../model/model');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop');
});


router.post('/stock', async function(req,res,next){
 try{
  const  {name,quantity,price}=req.body;
  const newproduct = new Product({
    name,quantity,price,
  })
 await newproduct.save();
 await Product.deleteMany({ name: '' })
  a= await Product.find()
  b= await Product.aggregate([
    {$count:'total'}
  ])
  res.render('datasheet',{data:a,dataone:b});
}
  catch(error){
    console.log('error')
  }
})
module.exports = router;
