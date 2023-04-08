const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userID : {type:String,required : true},
    product:[{
        prodId:{type:String},
        prodQuantity:{type:Number, default:1}
    }],
    address:{type:String,required:true},
    amount : {type:Number,required:true},
    status : {type:String,default:"pending",required:true},

},{timestamps:true})
mongoose.models = {}
let orderModel = mongoose.model("order", orderSchema)
export default orderModel