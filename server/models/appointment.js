const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const appointmentSchema=new Schema({
    
   // _id:Schema.Types.ObjectId,
    appointmentDate:Date, 
    Time:Number,
    patient: {type:Schema.Types.ObjectId,ref:'patient'},
    isConfirmed:Boolean

    });

module.exports=mongoose.model('appointment',appointmentSchema);