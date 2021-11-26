var express = require('express');
var router = express.Router();
var Appointment = require('../models/appointment');
var Patient = require('../models/patient');
var Doctor = require('../models/doctor');

// posting an appointment request 
router.post('/api/patients/:patient_id/appointments', async function (req, res, next) {
    const patient = await Patient.findById(req.params.patient_id);
    var requestDoctor = '{"first_name" : "requested"}';
    var doctorObject = JSON.parse(requestDoctor)
    var appointment = new Appointment({
        appointment_date: req.body.appointment_date,
        time: req.body.time,
        patient: patient,
        doctor: doctorObject,
       // doctor: req.body.doctor,
        is_confirmed: false
    });
    appointment.save(function (err, appointment) {

        if (err) { return next(err); }
        res.status(201).json(appointment);
    })
});

//For assigning a doctor to an appointment 
router.patch('/api/appointments/:appointment_id/doctors/:doctor_id', async (req, res) => {
    const { doctor_id, appointment_id } = req.params;

    Appointment.findById(appointment_id, (error, appointment) => {
        if (error) return res.status(500).json(error);
        if (appointment === null) return res.status(404).json({ message: `Appointment with id: ${appointment_id} not found` });

        Doctor.findById(doctor_id, (err, doctor) => {
            if (err) return res.status(500).json(err);
            if (doctor === null) return res.status(404).json({ message: 'Doctor not found' });

            appointment.is_confirmed = true;
            appointment.doctor = doctor;

            appointment.save();
            return res.status(200).json({ 'appointment': appointment });
        });
    })
});

// Getting one patients appointments
router.get('/api/patients/:patient_id/appointments', async function (req, res, next) {
    await Appointment.find({ 'patient': req.params.patient_id }, function (err, appointment) {
        if (!appointment) {
            return res.status(404).json({
                message: "There are no appointments"
            });
        }
        res.status(200).json({ 'appointment': appointment });
    }).populate('patient').populate('doctor')
});

// Getting a specific appointment for one patient 
router.get('/api/patients/:patient_id/appointments/:appointment_id', function (req, res, next) {
    var appointment = Appointment.findById(req.params.appointment_id);
    appointment.find({ 'patient': req.params.patient_id }, function (err, appointment) {
        if (!appointment) {
            return res.status(404).json({
                message: "This appointment does not exist."
            });
        }
        res.status(200).json({ 'appointment': appointment });
    });
});

// Deleting a specifik appointment for one patient 
router.delete('/api/patients/:patient_id/appointments/:appointment_id', function (req, res, next) {
    var appointment = Appointment.findById(req.params.appointment_id);
    appointment.remove({ 'patient': req.params.patient_id }, function (err, appointment) {
        if (!appointment) {
            return res.status(404).json({
                message: "There is no booking to delete"
            });
        }
        res.status(200).json({ 'appointment': appointment });
    });
});

router.delete('/api/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.remove();
        res.status(200).json(appointments);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.delete('/api/appointments/:id', async (req, res) => {
    try {
        const removed_appointment = await Appointment.remove({ _id: req.params.id });
        res.status(200).json(removed_appointment);
    } catch (err) {
        res.status(404).json({ message: "ID invalid" });
    }
});

// Getting all appointments 
router.get('/api/appointments', async (req, res) => {
    try {
        const appointment = await Appointment.find().populate ('patient').populate('doctor').exec();
        res.status(200).json(appointment);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

module.exports = router;
