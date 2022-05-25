const express = require('express');
const trackController = require('./controllers/trackController');
const router = express.Router();


router.get('/:id', trackController.listTrack);
router.post('/', trackController.postTrack);
router.put('/', trackController.updateTrack);
router.delete('/', trackController.deleteTrack);
module.exports = router;