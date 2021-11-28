var express = require('express');
var router = express.Router();
var Patient = require('../models/patient');
var Doctor =require ('../models/doctor');
var Notification = require('../models/notification');

router.post('/api/patients/:patient_id/notifications', async function (req, res, next) {
    const patient = await Patient.findById(req.params.patient_id);
    var notification = new Notification({
        text: 'Your appointment has been approved',
        appointment_date: req.body.appointment_date,
        appointment_time: req.body.appointment_time,
        patient: patient,
    });
    notification.save(function (err, notification) {

        if (err) { return next(err); }
        res.status(201).json(notification);
    })
});

router.get('/api/patients/:patient_id/notifications', function (req, res, next) {
      Notification.find({ 'patient': req.params.patient_id }, function (err, notification) {
        if (!notification) {
            return res.status(404).json({
                message: "There are no notifications"
            });
        }
        res.status(200).json({ 'notification': notification });
    });
});


router.delete('/api/patients/:patient_id/notifications/:notification_id', function (req, res, next) {
    var notification = Notification.findById(req.params.notification_id);
    notification.remove({ 'patient': req.params.patient_id }, function (err, notification) {
        if (!notification) {
            return res.status(404).json({
                message: "There is no booking to delete"
            });
        }
        res.status(200).json({ 'appointment': notification });
    });
});

module.exports = router;