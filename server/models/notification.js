const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const notificationSchema=new Schema({
    text:String, 
    appointment_date: String, 
    appointment_time: String,
    patient: {type:Schema.Types.ObjectId,ref:'patient'},
    doctor :{type:Schema.Types.ObjectId,ref:'doctor'}
    });

module.exports=mongoose.model('notification',notificationSchema);