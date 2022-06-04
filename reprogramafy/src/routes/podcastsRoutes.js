const controller = require('../controller/podcastsController')

const express = require('express')

const router = express.Router()

router.get("/biblioteca", controller.getAllPods)
router.get("/biblioteca/tema", controller.getTopics)
router.post("/adicionar", controller.addPods)
router.patch("/atualizar/:id", controller.atualizarPods) 
router.delete("/delete/:id", controller.deletePodcast) 

module.exports = router