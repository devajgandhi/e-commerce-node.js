const mongoose=require('mongoose')
const schema=mongoose.Schema;
const orderSchema= new schema({
        productId:
        {
            type:String,
            required:true
        },
        userId:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        pName:
        {
            type:String,
            required:true
        },
        quantity:{
                type:Number,
                required:true
        },
        status:
        {
            type:String,
            required:true
        },
        totalAmount:{
            type:Number,
            required:true
        },
        orderDate:{
            type:Date,
            required:true
        },
        deliveredBy:{
           type: Date,
           required:false
        }


})
module.exports = Item = mongoose.model('order',orderSchema);