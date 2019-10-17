var mongoose=require('mongoose');
var express=require('express');
var router=express.Router();
var orderSchema=require('./order-model');

router.get('/',function(req,res,next){
    let query = {};
    if (req.query.userId) {
        query = req.query;        
    }
    orderSchema.find(query, function(err,data){
        if(err){
            res.json("error ");

        }
        res.send(data);
    })
})
router.post('/',function(req,res,data){
    var obj=req.body;
    obj.orderDate=new Date();
    const om= new orderSchema(obj);
    om.save((err)=>{
        if(err){
            res.json("error ");

        }
        res.json("data saved");
    })
})
router.patch('/:id',function(req,res,next){
    orderSchema.updateOne({_id: mongoose.Types.ObjectId(req.params.id)},req.body,function(err,data){
        if (err) {
            res.json("error ");
        }
        res.send(data);
    })
})
module.exports=router;
