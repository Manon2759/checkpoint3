const express = require('express');
const albumController = require('./controllers/albumController');
const router = express.Router();


router.get('/:id', albumController.listAlbum);
router.post('/', albumController.postAlbum);
router.put('/', albumController.updateAlbum);
router.delete('/', albumController.deleteAlbum);
module.exports = router;