require('dotenv').config({path:'sec.env'});
const mongoose = require ('mongoose');

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
const db= mongoose.connection;

db.on('error', function (){
console.log('error occured')
});
db.once('open',function(){
    console.log('connected')
});

module.exports = db;






