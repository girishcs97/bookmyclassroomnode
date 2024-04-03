const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        maxlength:32
    },
    password:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    confirm_password:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    phone_number:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    course:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    username:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    
    

},{timestamps:true})
module.exports = mongoose.model("User",userSchema)