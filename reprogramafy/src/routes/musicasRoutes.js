const controller = require("../controller/musicasController")

const express = require("express");

const musicsRouter = express.Router();

musicsRouter.get("/allMusics", controller.allMusics)

musicsRouter.get("/musicTitle", controller.musicByTitle)

musicsRouter.get("/musicArtists", controller.musicByArtist)

musicsRouter.post("/newMusic", controller.addMusic)

musicsRouter.put("/updateMusic/:id", controller.updateMusic)

musicsRouter.patch("/favorited/:id", controller.favMusic)

musicsRouter.delete("/delete/:id", controller.deleteMusic)

module.exports = musicsRouter;