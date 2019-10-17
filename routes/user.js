var mongoose=require('mongoose');
var express=require('express');
var router=express.Router();

var userSchema=require('./user-model');

router.get('/',function(req,res,next){
    userSchema.find(function(err,data){
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
    const um= new userSchema(obj);
    um.save((err)=>{
        if(err){
            res.json("error ");

        }
        res.json("data saved");
    })
})
router.patch('/:id',function(req,res,next){
    var obj=req.body;
    obj.updatedDate=new Date();
    userSchema.updateOne({_id: mongoose.Types.ObjectId(req.params.id)},obj,function(err,data){
        if (err) {
            res.json("error ");
        }
        res.send(data);
    })
})

module.exports=router;

