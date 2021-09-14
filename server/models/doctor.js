var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var doctorSchema=new Schema({
    
    first_name: String,
    last_name: String,
    ID : Number,
    phoneNumber:Number,
    specialist:String,
    email_address:String,
    //booking ID 
});

module.exports=mongoose.model('doctor',doctorSchema);