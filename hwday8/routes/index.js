var express = require('express');
var router = express.Router();
const Mob= require('../model/model')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage',{error:null});
});

router.post('/savedatabase', function(req, res, next) {
  const {name,description,price}=req.body;
  const mobile =new Mob({
    name,description,price
  })
  const validationError = mobile.validateSync();
  if(validationError){
res.render('homepage',{error:validationError.errors});
  }
  else{
    mobile.save()
    .then(()=>{
res.redirect('/')
console.log('mobile added')
    })
    .catch((error)=>{
      console.log('error happened')
    })
  }
});


router.get('/readdatabase', function(req, res, next) {
  const {page=1,limit=2}=req.query;
  const options ={
    page:parseInt(page,10),
    limit:parseInt(limit,10),
  };
  Mob.paginate({},options)
  .then((data)=>{
    res.render('database',{data:data.docs,pagination:data})
  })
  .catch(error=>{
    console.log('error')
  }) 
});


router.get('/update/:id',function(req,res,next){
const mobileid =req.params.id;
Mob.findById(mobileid).lean()
.then((data)=>{
  res.render('toupdate',{data:data})
})
.catch((error)=>{
  console.log('error occured')
})
})

router.post('/updated/:id',function(req,res,next){
  const mobileid =req.params.id;
  const {name,description,price} =req.body;
  const mobile = new Mob({
    name,description,price
  })
Mob.findByIdAndUpdate(mobileid,{name,description,price})
.then((data)=>{
  res.redirect('/readdatabase');
})
.catch((error)=>{
  console.log('error')
})
})

router.get('/delete/:id', function(req, res, next) {
  const mobileid=req.params.id;
  Mob.findByIdAndDelete(mobileid)
  .then(()=>{
res.redirect('/readdatabase');
  })
  .catch(()=>{
console.log('error')
  })
});

module.exports = router;
