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

//retrieve patients collection and sorting when adding ?sortBy=lastName in postman
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
        const patients=await Patient.remove();
        res.json(patients);
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
    var patients = await Patient.find()
    var id = req.params.id;
    var updated_patient ={
    _id:req.params.id,
    "first_name":req.body.first_name,
    "last_name" :req.body.last_name,
    "personal_number":req.body.personal_number,
    "phone_number":req.body.phone_number,
    "email_address":req.body.email_address
    }
    patients[id] = updated_patient;
    res.status(200).json(updated_patient);});

//update the individual patient with first  
router.patch('/api/patients/:id', async(req, res)=>{
    const updated_patient= await Patient.updateOne(
    {_id:req.params.id},
    {$set:{first_name:req.body.first_name}});
    if (!updated_patient){
        return res.status(404).json({
            message: "This patient does not exsist"
        });
    } 
    res.status(200).json(updated_patient);
});

//delate individual patient 
router.delete('/api/patients/:id', async (req, res)=>{
    try{
        const removed_patient= await Patient.remove({_id:req.params.id});
        res.json(removed_patient);
    }catch(err){
        res.json({message:err});
    }
}); 

module.exports = router;