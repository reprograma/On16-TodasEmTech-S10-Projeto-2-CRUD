const controller = require('../controller/podcastsController')

const express = require('express')

const router = express.Router()


router.get('/biblioteca', controller.getAllPods)
router.get('/bibliotec/tema', controller.getTopics)
router.post("/adicionar", controller.addPods)
router.patch('/atualizar/:id', controller.atualizarPods)
router.delete('deletar/:id')

module.exports = router