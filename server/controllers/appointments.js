var express = require('express');
const appointment = require('../models/appointment');
var router = express.Router();
var Appointment=require('../models/appointment');


router.post('/api/appointments', function(req, res, next){
    var  appointment= new Appointment(req.body);
        appointment.save(function(err, appointment) {
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
    
module.exports=router;