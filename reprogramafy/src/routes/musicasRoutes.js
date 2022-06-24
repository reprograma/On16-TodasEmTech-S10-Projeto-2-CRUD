const controller = require('../controller/musicasController');
const express = require('express');
const router = express.Router();

//router.metodo http
router.get("/musics", controller.getAllMusics);
router.get("/musics/:id", controller.getMusicByID);
router.get("/musics/artist", controller.getMusicByArtist);
router.post("/add", controller.addMusic);
router.patch("/update/:id", controller.updateFavoritedMusic);
router.put('/musics/:id', controller.updateMusic);
router.delete("/musics/:id", controller.deleteMusic)

module.exports = router;
