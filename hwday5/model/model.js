const mongoose = require ('mongoose');

const data = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
});

User = mongoose.model('Product',data);

module.exports =User;