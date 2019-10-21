const cron = require('node-cron');
var mongoose=require('mongoose');

const birthdayCron = cron.schedule('55 16 18 * *', () => {
        
    console.log("happy birthday devaj");

});
const birthdayCron2=cron.schedule('0 9 19 * *',()=>{
    console.log("happy birthday karan");
})
const birthdayCron3=cron.schedule('05 2 30 sept *',()=>{
    console.log('happy birthday maurya');
})


module.exports={
    birthdayCron:birthdayCron,
    birthdayCron2:birthdayCron2,
    birthdayCron3:birthdayCron3
}