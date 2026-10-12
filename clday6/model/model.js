const mongoose = require ('mongoose');

const product = new mongoose.Schema({
    name:String,
    quantity:Number,
    price:Number
})

Detail =mongoose.model('Product',product);

module.exports = Detail;