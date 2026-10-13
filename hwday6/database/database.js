require('dotenv').config({path:'secure.env'})
const mongoose = require ('mongoose');

const database = process.env.MONGO_URI;

mongoose.connect(database);


db=mongoose.connection

db.on('error',console.log.bind(console,'error occured'))
db.once('open',function(){
console.log('connected to database ')
})

module.exports=db;