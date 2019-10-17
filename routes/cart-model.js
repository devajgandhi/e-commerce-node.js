const mongoose=require('mongoose')
const schema=mongoose.Schema;
const cartSchema= new schema({
        userId:{
            type:String,
            required:true
        },
        productId:{
            type:String,
            required:true 
        },
        pName:
        {
            type:String,
            required:true
        },
        desc:
        {
            type:String,
            required:true
        },

        quantity:{
            type:Number,
            required:true
        },
        price:
        {
            type:Number,
            required:true
        },
        isActive:{
            type:Boolean,
            default:true
        },
        createdDate:{
            type:Date,
            required:true
        },
        updatedDate:{
            type:Date,
            required:true
        },
        createdBy:{
            type:String,
            default:"Admin"
        },
        updatedBy:{
            type:String,
            default:"Admin"
        }


})
module.exports = Item = mongoose.model('cart',cartSchema);