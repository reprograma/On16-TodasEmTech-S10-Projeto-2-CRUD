const controller = require("../controller/podcastsController")

const express = require("express")

const router = express.Router()

router.get("/biblioteca", controller.getAllPods)
router.get("biblioteca/tema", controller.getTopics)
router.post("/adicionar", controller.postNewPod)
router.delete("/deletar/:id", controller.deletePods)
router.patch("/atualizar/:id", controller.updatePods)


module.exports = router