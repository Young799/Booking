const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const appointmentSchema=new Schema({
    appointment_date:Date, 
    time:Number,
    patient: {type:Schema.Types.ObjectId,ref:'patient'},
    doctor: {type:Schema.Types.ObjectId,ref:'doctor'},
    is_confirmed:Boolean
    });

module.exports=mongoose.model('appointment',appointmentSchema);