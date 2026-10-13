var express = require('express');
var router = express.Router();
const Model= require('../model/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/st',async function(req, res, next) {
try{
  const {name,quantity,price}=req.body
  const sa= new Model({
    name,quantity,price
  })
  await sa.save();
 await Model.deleteMany({
  $or: [
    { name: "" },
    { price: "" }
  ]
});
  a= await Model.aggregate([
    { $sort: { price: 1 } },
     { $limit: 5 } ,
    { $project: { name: 1, price: 1, _id: 0 } }
  ])

  res.render('data',{dataone:a});

}
catch(error){
  console.log('error has occured')
}




});


module.exports = router;
