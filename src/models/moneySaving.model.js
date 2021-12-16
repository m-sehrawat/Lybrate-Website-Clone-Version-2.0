const mongoose = require("mongoose");

const moneySavingSchema = new mongoose.Schema({
    img:[{type:String,required:true}],
    companyname:{type:String,required:true},
    name:{type:String,required:true},
    newprice:{type:Number,required:true},
    oldprice:{type:Number,required:true},
    off:{type:String,required:true},
    
},{
versionKey:false,
timestamps:true
})

module.exports=mongoose.model("moneySaving", moneySavingSchema);