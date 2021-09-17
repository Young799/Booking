const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const appointmentSchema=new Schema({
    appointmentDate:Date, 
    Time:Number,
    patient: {type:Schema.Types.ObjectId,ref:'patient'},
    doctor: {type:Schema.Types.ObjectId,ref:'doctor'},
    isConfirmed:Boolean
    });

module.exports=mongoose.model('appointment',appointmentSchema);