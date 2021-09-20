var express = require('express');
var router = express.Router();
var Appointment = require('../models/appointment');
var Patient = require('../models/patient');
var Doctor = require('../models/doctor');

// posting an appointment request 
router.post('/api/patients/:patient_id/appointments', async function(req, res, next){
        const patient=await Patient.findById(req.params.patient_id);
        var  appointment= new Appointment({
            appointment_date:req.body.appointmentDate, 
            time:req.body.time,
            patient: patient,
            is_confirmed:false
        });
        appointment.save(function(err, appointment){
        
        if (err) { return next(err); }
        res.status(201).json(appointment);
    })
}); 

//For assigning a doctor to an appointment !!! FAILING TEST
/*router.patch('/api/appointments/:appointment_id/doctors/:doctor_id', async(req, res)=>{
    let doctor = req.params.doctor_id;
    var appointments = await Appointment.find()
    var id = req.params.appointment_id;
    var appointment = appointments[id]

  Doctor.findById(doctor, function (err, doctor) {
    if (err) return next(err);
    if (doctor === null) {
      return res.status(404).json({ 'message': ' Doctor not found' });
    }
  var updated_appointment = {
       _id: id,
    "doctor" : doctor,
    "is_confirmed" : true
  };
    if (appointment === null) {
        res.status(404).json({ 'message': 'Appointment not found' });
    }
    appointments[id] = updated_appointment;
    return res.status(200).json({ 'appointment': updated_appointment});
  });
});*/

// Getting one patients appointments
router.get('/api/patients/:patient_id/appointments', async function(req, res, next){
    await Appointment.find({ 'patient': req.params.patient_id }, function (err, appointment) {
    if (!appointment) {
        return res.status(404).json({
            message: "There are no appointments"
        });
    }
    res.status(200).json({ 'appointment': appointment });
    });
});

// Getting a specific appointment for one patient 
router.get('/api/patients/:patient_id/appointments/:appointment_id',  function (req, res, next) {
    var appointment= Appointment.findById(req.params.appointment_id);
    appointment.find({'patient': req.params.patient_id }, function (err, appointment) {
    if (!appointment) {
        return res.status(404).json({
            message: "This appointment does not exist."
        });
    }
    res.status(200).json({'appointment': appointment });
    });
});

// Deleting a specifik appointment for one patient 
router.delete('/api/patients/:patient_id/appointments/:appointment_id',  function(req, res, next){
    var appointment= Appointment.findById(req.params.appointment_id);
    appointment.remove({ 'patient': req.params.patient_id }, function (err, appointment) {
    if (!appointment) {
        return res.status(404).json({
            message: "There is no booking to delete"
        });
    }
    res.status(200).json({ 'appointment': appointment });
});
});

// Getting all appointments 
router.get('/api/appointments',async (req,res)=>{
        try{
            const appointment=await Appointment.find();
            res.status(200).json(appointment);
        }catch(err){
            res.json({message:err});
        }
    });
     
module.exports=router;