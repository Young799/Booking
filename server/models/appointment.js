const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const appointmentSchema=new Schema({
    appointment_date:String, 
    time:String,
    patient: {type:Schema.Types.ObjectId,ref:'patient'},
    doctor: {type:Schema.Types.ObjectId, ref:'doctor'}, // default : {first_name: "not assigned"},},
    is_confirmed:Boolean
    });

module.exports=mongoose.model('appointment',appointmentSchema);