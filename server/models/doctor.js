var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var doctorSchema=new Schema({
    
   // _id: Schema.Types.ObjectId(),
    first_name: String,
    last_name: String,
    personalNumber:Number,
    specialist:String,
    email_address:String,
    appointment :[{type:Schema.Types.ObjectId,ref: 'appointment '}]
   
});

module.exports=mongoose.model('doctor',doctorSchema);