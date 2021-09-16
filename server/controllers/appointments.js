var express = require('express');
var router = express.Router();
var Appointment = require('../models/appointment');
var Patient = require('../models/patient');
var Doctor = require('../models/doctor');

router.post('/api/patients/:patient_id/appointments', async function(req, res, next){
        const patient=await Patient.findById(req.params.patient_id);
        var  appointment= new Appointment({
            bookingID:req.body.bookingID,
            appointmentDate:req.body.appointmentDate, 
            time:req.body.time,
            patient: patient,
            isConfirmed:false
        });
        appointment.save(function(err, appointment){
        
        if (err) { return next(err); }
        res.status(201).json(appointment);
    })
}); 

router.patch('/api/appointments/:appointment_id/doctors/:doctor_id', async(req, res)=>{
    let doctor = req.params.doctor_id;
  var id = req.params.appointment_id;
  Doctor.findById(doctor, function (err, doctor) {
    if (err) return next(err);
    if (doctor === null) {
      return res.status(404).json({ 'message': ' Doctor not found' });
    }
  Appointment.updateOne({ _id: id },{$set:{doctor : doctor}},
    {$set:{isConfirmed: true}}, function (err, appointment) {
    if (err) { return next(err); }
    if (appointment == null) {
      return res.status(404).json({ 'message': 'Appointment not found' });
    }
    res.json(appointment);
  });
});
});

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

router.get('/api/appointments',async (req,res)=>{
        try{
            const appointment=await Appointment.find();
            res.status(200).json(appointment);
        }catch(err){
            res.json({message:err});
        }
    });

router.delete('/api/appointments',async (req,res)=>{
        try{
            const appointment=await Appointment.remove();
            res.status(201).json(appointment);
        }catch(err){
            res.json({message:err});
        }
    });  
     
module.exports=router;