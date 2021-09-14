var express = require('express');
var router = express.Router();
var Doctor = require('../models/doctor');

//create doctors in DB
router.post('/api/doctor', (req, res, next)=>{
    var doctor= new Doctor(req.body);
    doctor.save(function(err, doctor) {
        if (err) { return next(err); }
        res.status(201).json(doctor);
    })
});

//get doctor collection 
router.get('/api/doctor',async (req,res)=>{
    try{
        const doctors=await Doctor.find();
        res.status(200).json(doctors);
    }catch(err){
        res.json({message:err});
    }
});


//get specific doctor
router.get('/api/doctor/:doctorId', async (req, res)=>{

    try{
        const doctor=await Doctor.findById(req.params.doctorId);
        res.json(doctor);
    }catch(err){
        res.json({message:err});
    }
});


//delete doctor collection
router.delete('/api/doctor',async (req,res)=>{
    try{
        const doctors=await Doctor.remove();
        res.status(201).json(doctors);
    }catch(err){
        res.json({message:err});
    }
});
//delate specific doctor
router.delete('/api/doctor/:doctorId', async (req, res)=>{
    try{
        const removedPatient= await Patient.remove({_id:req.params.doctorId});
        res.json(removedPatient);
    }catch(err){
        res.json({message:err});
    }
});

//update doctor
router.patch('/api/doctor/:doctorId', async (req, res)=>{

    try{
        const updatedDoctor=await  Doctor.updateOne(
        {_id:req.params.doctorId},
        {$set:{first_name:req.body.first_name}});
        res.json(updatedDoctor);
    }catch(err){
        res.json({message:err});
    }
});


module.exports = router ;
