const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
    title :         {type:String,required : true},
    slug :          {type:String,required : true, unique:true},
    description :   {type:String,required : true},
    img :           {type:String,required : true},
    category :      {type:String,required : true},
    size :          {type:String},
    color :         {type:String,required : true},
    price :         {type:Number,required : true},
    AvailableQuantity : {type:Number,required :true}

},{timestamps:true})
mongoose.models = {}
export default mongoose.model("prod", prodSchema)

