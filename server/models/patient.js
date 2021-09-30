const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const patientSchema = new Schema({
    first_name: String,   
    last_name: String,
    personal_number: Number,
    phone_number: Number,
    email_address:String,
    password: String
});

module.exports = mongoose.model('patient', patientSchema);