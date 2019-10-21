const cron = require('node-cron');
var mongoose=require('mongoose');
var fs=require('fs')
var json2xls=require('json2xls')
var userSchema=require('../routes/user-model'); 
var orderSchema=require('../routes/order-model');
 
const demoCron = cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
  userSchema.find(function(err,data){
    if(err){
        console.log("err");
    }
    console.log(data);
    var xl = json2xls(data,{fields: ['firstName','lastName','email','mobileNo','address','DOB','state','city','createdDate']});
    fs.writeFileSync('data1.xlsx', xl, 'binary');

  });
  orderSchema.find( function(err,data){
      if(err){
          console.log("err");
      }
      var xls = json2xls(data,{fields: ['productId','userId','address','pName','quantity','status','totalAmount','orderDate','deliveredBy']});
  console.log(data);
  fs.writeFileSync('data.xlsx', xls, 'binary');
});

});



module.exports = {
    demoCron: demoCron
}