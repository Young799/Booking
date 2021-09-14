var express = require('express');
var router = express.Router();
var Patient = require('../models/patient');
var appointment=require('../models/appointment')


router.post('/api/patient', function(req, res, next){
    var  patient= new Patient(req.body);
    patient.save(function(err, patient) {
        if (err) { return next(err); }
        res.status(201).json(patient);
    })
}); 

router.get('/api/patient',async(req,res)=>{
    var patient=await Patient.find()
    res.json(patient);
});



//get specific patient
router.get('/api/patient/:patientId',async (req, res)=>{

    try{
        const patient=await Patient.findById(req.params.patientId);
        res.json(patient);
    }catch(err){
        res.json({message:err});
    }
});

//delate one patient 
router.delete('/api/patient/:patientId', async (req, res)=>{
    try{
        const removedPatient= await Patient.remove({_id:req.params.patientId});
        res.json(removedPatient);
    }catch(err){
        res.json({message:err});
    }
});

//delete  patient collection
router.delete('/api/patient',async (req, res)=>{

    try{
        const patient=await Patient.remove();
        res.json(patient);
    }catch(err){
        res.json({message:err});
    }
});

//delate individual patient 
router.delete('/api/patient/', async (req, res)=>{
    try{
        const removedPatient= await Patient.remove({_id:req.params.patientId});
        res.json(removedPatient);
    }catch(err){
        res.json({message:err});
    }
});

//update patient
router.patch('/api/patient/:patientId', async(req, res)=>{

    try{
        const updatedPatient= await Patient.updateOne(
        {_id:req.params.patientId},
        {$set:{firstName:req.body.firstName}});
        res.json(updatedPatient);
    }catch(err){
        res.json({message:err});
    }
});

//Update patient with PUT
router.put('/api/patient/:patientId', async(req, res)=>{

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

module.exports = router ;
