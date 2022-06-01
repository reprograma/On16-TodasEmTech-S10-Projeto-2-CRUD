const controller = require("../controller/musicasController");

const express = require("express");

const router = express.Router();

router.get("/musics", controller.getAllTheSongs);
router.get("/musics/:id", controller.getJustOneMusic);
router.get("/search/artists", controller.getMusicByArtist);
router.post("/add/", controller.addMusic);
router.put("/change/:id", controller.replaceMusic);
router.delete("/delete/:id", controller.deleteMusic);
router.patch("/update/:id", controller.updateMusic);

module.exports = router;
