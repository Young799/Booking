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

//login a patient
router.post('/api/login', function (req, res) {
    // validate before logingin a patient
    const email = req.body.email_address;
    const password = req.body.password;
    // checking if patient exists in the database
    Patient.findOne({email_address : email }, function (err, foundPatient) {
       if(err){
           console.log(err);
       }else{
       if (foundPatient) {
            if (foundPatient.password === password) {
                res.status(201).json(foundPatient)
            }else{
                return res.status(404).json({ 'message': 'Incorrect password' })
            }
        }else{
            return res.status(404).json({ 'message': 'Incorrect Email' })
        }
    }
    });    
   });


//retrieve patients collection and sorting when adding ?sortBy=lastName in postman
router.get('/api/patients', function(req,res,next){
    let sort = req.query.sortBy;  
    Patient.find({}).sort(sort).exec(function(err, patients) { 
                if (!patients) {
                    return res.status(404).json({
                        message: 'can not find any patients'
                    });
                }
                res.status(200).json({'patients': patients });
            }); 
    });

//Delete patients collection
router.delete('/api/patients',async (req, res)=>{
    try{
        const patients=await Patient.remove();
        res.status(200).json(patients);
    }catch(err){
        res.status(404).json({message:err});
    }
});

//get individual patient
router.get('/api/patients/:id',async (req, res)=>{
    try{
        const patient=await Patient.findById({_id:req.params.id});
        res.status(200).json(patient);
    }catch(err){
        res.status(404).json({message:"Id invalid"});
    }
});

 //Update the individual patient with PUT 
 router.put('/api/patients/:id', function (req, res, next) {
    const patient = Patient.findById({ _id: req.params.id })
    Patient.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (patient) {
        res.send(patient)
    })
});

//update the individual patient with first  
router.patch('/api/patients/:id', async(req, res)=>{
    const updated_patient= await Patient.updateOne(
    {_id:req.params.id},
    {$set:{first_name:req.body.first_name}});
    if (!updated_patient){
        return res.status(204).json({
            message: "This patient does not exists"
        });
    } 
    res.status(200).json(updated_patient);
});

//delate individual patient 
router.delete('/api/patients/:id', async (req, res)=>{
    try{
        const removed_patient= await Patient.remove({_id:req.params.id});
        res.status(200).json(removed_patient);
    }catch(err){
        res.status(404).json({message:"ID invalid"});
    }
}); 

module.exports = router;