const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const doctorSchema=new Schema({
    first_name: String,
    last_name: String,
    personalNumber:Number,
    specialist:String,
    email_address:String,
});

module.exports=mongoose.model('doctor',doctorSchema);