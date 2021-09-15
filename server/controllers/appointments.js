var express = require('express');
var router = express.Router();
var Appointment=require('../models/appointment');
var Patient=require('../models/patient');


router.post('/api/patients/:patientId/appointments', async function(req, res, next){
        
        const patient=await Patient.findById(req.params.patientId);
        var  appointment= new Appointment({
            bookingID:req.body.bookingID,
            appointmentDate:req.body.appointmentDate, 
            time:req.body.time,
            patient: patient,
            isConfirmed:true

        });
        appointment.save(function(err, appointment){
        
        if (err) { return next(err); }
        res.status(201).json(appointment);
    })
}); 


router.get('/api/patients/:patientId/appointments', async function(req, res, next){
    await Appointment.find({ 'patient': req.params.patientId }, function (err, appointment) {
    if (!appointment) {
        return res.status(404).json({
            message: "There are no orders"
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