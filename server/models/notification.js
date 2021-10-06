const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const notificationSchema=new Schema({
    text:String, 
    patient: {type:Schema.Types.ObjectId,ref:'patient'}
    });

module.exports=mongoose.model('notification',notificationSchema);