const controller = require("../controller/podcastsController")
const express = require("express")
const router = express.Router()

router.get("/biblioteca", controller.getAllPods)
router.get("/biblioteca/tema", controller.getTopics)
router.post("/adicionar", controller.addPodcast)
router.patch("/atualizar/:id", controller.updatePodcast)
router.delete("/delete/:id", controller.deletePodcast)










module.exports = router