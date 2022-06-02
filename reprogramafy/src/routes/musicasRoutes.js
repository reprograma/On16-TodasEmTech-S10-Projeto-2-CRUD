const controller = require('../controller/musicasController')
const express = require('express')

const router = express.Router()

router.get('/musics', controller.getAllTracks);
router.get('/musics/:id', controller.getIdTracks);
router.get('/music/artists', controller.getArtists);
router.post('/musics/add', controller.addTracks);
router.put('/change/:id', controller.changeTrack);
router.delete('/delete/:id', controller.deleteTrackId);
router.patch('/update/:id/favorited', controller.updateTrack)



module.exports = router