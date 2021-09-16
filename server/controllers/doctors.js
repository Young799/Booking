var express = require('express');
var router = express.Router();
var Doctor = require('../models/doctor');

//create doctors in DB
router.post('/api/doctors', (req, res, next)=>{
    var doctor= new Doctor(req.body);
    doctor.save(function(err, doctor) {
        if (err) { return next(err); }
        res.status(201).json(doctor);
    })
});

//get doctor collection 
router.get('/api/doctors',async (req,res)=>{
    try{
        const doctors=await Doctor.find();
        res.status(200).json(doctors);
    }catch(err){
        res.json({message:err});
    }
});

//delete doctor collection
router.delete('/api/doctors',async (req,res)=>{
    try{
        const doctors=await Doctor.remove();
        res.status(201).json(doctors);
    }catch(err){
        res.json({message:err});
    }
});

//get the individual doctor
router.get('/api/doctors/:id', async (req, res)=>{
    try{
        const doctor=await Doctor.findById(req.params.id);
        res.json(doctor);
    }catch(err){
        res.json({message:err});
    }
});

//update /create with doctor with  Put
router.put('/api/doctors/:id', async(req, res)=>{
    try{
        const updatedDoctor= await Doctor.updateOne(
        {_id:req.params.id},
        {$set:{first_name:req.body.first_name}},
        {$set:{last_name :req.body.last_name}},
        {$set:{phoneNumber:req.body.phoneNumber}},
        {$set:{specialist:req.body.specialist}},
        {$set:{email_address:req.body.email_address}}
        );
        res.json(updatedDoctor);
        
    }catch(err){
        res.json({message:err});
    }
});

//update doctor with PATCH method
router.patch('/api/doctors/:id', async (req, res)=>{

    try{
        const updatedDoctor=await Doctor.updateOne(
        {_id:req.params.id},
        {$set:{first_name:req.body.first_name}});
        res.json(updatedDoctor);
    }catch(err){
        res.json({message:err});
    }
});

//delete the individual doctor
router.delete('/api/doctors/:id', async (req, res)=>{
    try{
        const removedDoctor= await Doctor.remove({_id:req.params.doctorId});
        res.json(removedDoctor);
    }catch(err){
        res.json({message:err});
    }
});

//get all doctors with appointment   
router.get('/api/doctors/appointment', async(req,res)=>{
    try{
    const doctorsAppointment=await Doctor.find().populate('appointment');
    res.json(doctorsAppointment);

    }catch (err){
    res.json({message:err});
}
});

module.exports = router ;