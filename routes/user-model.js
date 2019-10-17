const mongoose=require('mongoose')
const schema=mongoose.Schema;
const userSchema= new schema({
        firstName:
        {
            type:String,
            required:true
        },
        lastName:
        {
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        mobileNo:{
            type:Number,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        DOB:{
                type:String,
                required:true
        },
        state:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        createdBy:{
            type:String,
            default:"Admin"
        },
        updatedBy:{
            type:String,
            default:"Admin"
        },
         createdDate:{
            type:Date,
            required:true
        },
        updatedDate:{
            type:Date,
            required:true
        },
        isActive:{
            type:Boolean,
            default:true
        }


})
module.exports = Item = mongoose.model('user',userSchema);