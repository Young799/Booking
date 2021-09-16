var express = require('express');
var router = express.Router();
var Patient = require('../models/patient');

//create a patient
router.post('/api/patients', function(req, res, next){
    var  patient= new Patient(req.body);
    patient.save(function(err, patient) {
        if (err) { return next(err); }
        res.status(201).json(patient);
    })
}); 

//retrieve patients collection and sorting when adding patients?sortBy=firstName in postman
router.get('/api/patients', function(req,res,next){
    let sort = req.query.sortBy;  
    Patient.find({}).sort(sort).exec(function(err, patients) { 
                if (!patients) {
                    return res.status(404).json({
                        message: 'cant find any patients'
                    });
                }
                res.status(200).json({'patients': patients });
            }); 
    });

//Delete patients collection
router.delete('/api/patients',async (req, res)=>{
    try{
        const patient=await Patient.remove();
        res.json(patient);
    }catch(err){
        res.json({message:err});
    }
});

//get individual patient
router.get('/api/patients/:id',async (req, res)=>{
    try{
        const patient=await Patient.findById({_id:req.params.id});
        res.json(patient);
    }catch(err){
        res.json({message:err});
    }
});

//Update the individual patient with PUT
router.put('/api/patients/:id', async(req, res)=>{
    try{
        const updatedPatient= await Patient.updateOne(
        {_id:req.params.id},
        {$set:{lastName:req.body.lastName}},
        {$set:{PersonalNumber:req.body.PersonalNumber}},
        {$set:{Phone_number:req.body.Phone_number}},
        {$set:{email_address:req.body.email_address}}
        );
        res.json(updatedPatient); 
    }catch(err){
        res.json({message:err});
    }
});

//update the individual patient with first
router.patch('/api/patients/:id', async(req, res)=>{
    try{
        const updatedPatient= await Patient.updateOne(
        {_id:req.params.id},
        {$set:{firstName:req.body.firstName}});
        res.json(updatedPatient);
    }catch(err){
        res.json({message:err});
    }
});

//delate individual patient 
router.delete('/api/patients/:id', async (req, res)=>{
    try{
        const removedPatient= await Patient.remove({_id:req.params.id});
        res.json(removedPatient);
    }catch(err){
        res.json({message:err});
    }
}); 

module.exports = router ;