const mongoose = require('mongoose');

const patientSchema= new mongoose.Schema({
   // _id: Schema.Types.ObjectId(),
    firstName: { type: String, trim:true,default:'' },  //trim empty space, set default value
    lastName:{type:String,default:''},
    PersonalNumber: { type: Number ,default:0},
    Phone_number: { type: Number,default:0 },
    email_address: { type: String,default:'' },
   // appointment:[{type:mongoose.Schema.Types.ObjectId,ref:'appointment'}]

});

module.exports = mongoose.model('patient', patientSchema);