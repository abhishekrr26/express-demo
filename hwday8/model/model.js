 const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')
 const mobile= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        maxlength:[500,'Name cannot exceed 500 characters']
    },
    description:{
        type:String,
        required:[true,'Despcription is required']
    },
    price:{
        type:Number,
        required:[true,'description is required'],
        min:[0,'Price cannot be negative ']
    },
 });
 
 mobile.plugin(mongoosePaginate);
const Mob =mongoose.model('mobile',mobile);
module.exports =Mob;
