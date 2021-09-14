const mongoose = require('mongoose');

const patientSchema= new mongoose.Schema({
    firstName: { type: String, trim:true,default:'' },  //trim empty space, set default value
    lastName:{type:String,default:''},
    PersonalNumber: { type: Number ,default:0},
    gender:{type:String},
    Phone_number: { type: Number,default:0 },
    email_address: { type: String,default:'' }
    

});

module.exports = mongoose.model('patient', patientSchema);