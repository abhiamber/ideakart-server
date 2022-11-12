const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    experience:{type:String,required:true},
    file: {type:String,required:true},
    buy:{type:String,required:true},
    plateform:{type:String,required:true}
},{versionKey:false})

const Product=mongoose.model("prod",productSchema)

module.exports=Product