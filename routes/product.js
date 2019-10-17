var mongoose=require('mongoose');
var express=require('express');
var router=express.Router();
var productSchema=require('./product-model');


router.get('/',function(req,res,next){
    productSchema.find(function(err,data){
        if(err){
            res.json("error ");

        }
        res.send(data);
    })
})
router.post('/',function(req,res,data){
    var obj=req.body;
    obj.createdDate=new Date();
    obj.updatedDate=new Date();
    const pm= new productSchema(obj);
    pm.save((err)=>{
        if(err){
            res.json("error ");

        }
        res.json("data saved");
    })
})
router.patch('/:id',function(req,res,next){
    var obj=req.body;
    obj.updatedDate=new Date();
    productSchema.updateOne({_id: mongoose.Types.ObjectId(req.params.id)},obj,function(err,data){
        if (err) {
            res.json("error ");
        }
        res.send(data);
    })
})
module.exports=router;

