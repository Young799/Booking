var express = require('express');
var router = express.Router();
var Patient = require('../models/patient');
var appointment=require('../models/appointment')

//create patient
router.post('/api/patients', function(req, res, next){
    var  patient= new Patient(req.body);
    patient.save(function(err, patient) {
        if (err) { return next(err); }
        res.status(201).json(patient);
    })
}); 

//retrieve patients collection
router.get('/api/patients',async(req,res)=>{
    var patient=await Patient.find()
    res.json(patient);
});


//delete  patients collection
router.delete('/api/patients',async (req, res)=>{

    try{
        const patient=await Patient.remove();
        res.json(patient);
    }catch(err){
        res.json({message:err});
    }
});

//get individual patient
router.get('/api/patients/:patientId',async (req, res)=>{

    try{
        const patient=await Patient.findById({_id:req.params.patientId});
        res.json(patient);
    }catch(err){
        res.json({message:err});
    }
});

//Update the individual patient with PUT
router.put('/api/patients/:patientId', async(req, res)=>{

    try{
        const updatedPatient= await Patient.updateOne(
        {_id:req.params.patientId},
        {$set:{lastName:req.body.lastName}},
        {$set:{PersonalNumber:req.body.PersonalNumber}},
        {$set:{Phone_number:req.body.Phone_number}},
        {$set:{email_address:req.body.email_address}},
        {$set:{appointment:req.body.appointment}}
        );
        res.json(updatedPatient);
        
    }catch(err){
        res.json({message:err});
    }
});

//update the individual patient with first
router.patch('/api/patients/:patientId', async(req, res)=>{

    try{
        const updatedPatient= await Patient.updateOne(
        {_id:req.params.patientId},
        {$set:{firstName:req.body.firstName}});
        res.json(updatedPatient);
    }catch(err){
        res.json({message:err});
    }
});

//delate individual patient 
router.delete('/api/patients/:patientId', async (req, res)=>{
    try{
        const removedPatient= await Patient.remove({_id:req.params.patientId});
        res.json(removedPatient);
    }catch(err){
        res.json({message:err});
    }
});


module.exports = router ;
