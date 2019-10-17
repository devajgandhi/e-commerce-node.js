const mongoose=require('mongoose')
const schema=mongoose.Schema;
const producSchema= new schema({
        pName:
        {
            type:String,
            retquired:true
        },
        price:{
            type:Number,
            retquired:true
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
        // image:
        // {
        //     type:Image,
        //     required:true
        // }
    

})
module.exports = Item = mongoose.model('product',producSchema);