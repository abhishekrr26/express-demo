 const mongoose = require ('mongoose');

 const book= new mongoose.Schema({
    name:String,
    page:Number,
 });
 

const Book =mongoose.model('hmday7',book);

module.exports =Book;