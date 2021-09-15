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