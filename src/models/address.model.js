const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name:{type:String,required:true},
    mobile:{type:Number,required:true},
    city:{type:String,required:true},
    pincode:{type:Number,required:true},
    address:{type:String,required:true},
   
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("address", addressSchema)

/* 
            let mobile = document.getElementById('mobile').value
            let city = document.getElementById('city').value
            let pincode = document.getElementById('pincode').value
            let address = document.getElementById('address').value
            
            */