const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const patientSchema = new Schema({
    first_name:String,
    last_name:String,
    password: String,
    confirmPassword:String,
    email_address:String
});


module.exports = mongoose.model('patient', patientSchema);