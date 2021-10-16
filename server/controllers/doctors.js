var express = require('express');
var router = express.Router();
var Doctor = require('../models/doctor');

//create doctors in DB
router.post('/api/doctors', (req, res, next)=>{
    var doctor = new Doctor(req.body);
    doctor.save(function(err, doctor) {
        if (err) { return next(err); }
        res.status(201).json(doctor);
    })
});

//login a patient
router.post('/api/logindoctors', function (req, res) {
    // validate before logingin a patient
    const email = req.body.email_address;
    const password = req.body.password;
    // checking if patient exists in the database
    Doctor.findOne({email_address : email }, function (err, foundDoctor) {
       if(err){
           console.log(err);
       }else{
       if (foundDoctor) {
            if (foundDoctor.password === password) {
                res.status(201).json(foundDoctor)
            }else{
                return res.status(404).json({ 'message': 'Incorrect password' })
            }
        }else{
            console.log('hello')
            return res.status(404).json({ 'message': 'Incorrect Email' })
        }
    }
    });
   });

//get doctor collection
router.get('/api/doctors',async (req,res)=>{
    try{
        const doctors=await Doctor.find();
        res.status(200).json(doctors);
    }catch(err){
        res.status(404).json({error:"The doctors are not found"});
    }
});
//delete the individual doctor
router.delete('/api/doctors/:id', async (req, res)=>{
    try{
        const removed_doctor= await Doctor.remove({_id:req.params.id});
        res.status(200).json(removed_doctor);
    }catch(err){
        res.status(404).json({error:"The ID was not found"});
    }
});

//delete doctor collection
router.delete('/api/doctors',async (req,res)=>{
    try{
        const doctors=await Doctor.remove();
        res.status(200).json(doctors);
    }catch(err){
        res.status(404).json({message:err});
    }
});

//get the individual doctor
router.get('/api/doctors/:id', async (req, res)=>{
    try{
        const doctor=await Doctor.findById(req.params.id);
        res.status(200).json(doctor);
    }catch(err){
        res.status(404).json({error:"The ID was not found"});
    }
});

//update /create with doctor with  Put !! NOT WORKING
router.put('/api/doctors/:id', async(req, res)=>{
    var doctors = await Doctor.find()
    var id= req.params.id;
    var updated_doctor ={
    _id:req.params.id,
    "first_name":req.body.first_name,
    "last_name" :req.body.last_name,
    "phone_number":req.body.phone_number,
    "specialist":req.body.specialist,
    "email_address":req.body.email_address
    }
    if (!updated_doctor){
        return res.status(404).json({
            message: "The doctor is not found"
        });
    }
    doctors[id] = updated_doctor;
    res.status(200).json(updated_doctor);});

//update doctor with PATCH method
router.patch('/api/doctors/:id', async (req, res)=>{
    try{
        const updated_doctor=await Doctor.updateOne(
        {_id:req.params.id},
        {$set:{first_name:req.body.first_name}});
        res.status(200).json(updated_doctor);
    }catch(err){
        res.status(404).json({message:err});
    }
});

module.exports = router;
