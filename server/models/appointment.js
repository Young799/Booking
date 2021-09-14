const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const appointmentSchema=new Schema({
    
    BookingID:Number,
    bookedDate:Date, 
    bookedTime:Number,  //date and time
    patient:{type:mongoose.Schema.Types.ObjectId,ref: 'patient'},
    doctor: {type:mongoose.Schema.Types.ObjectId,ref:'doctor'},
    isConfirmed:Boolean

    });

module.exports=mongoose.model('appointment',appointmentSchema);