const controller = require('../controller/podcastsController')

const express = require('express')

const router = express.Router()

router.get('/biblioteca', controller.getAllPods)
router.get('/biblioteca/topico', controller.getPodsByTopic)
router.post('/cadastrar', controller.postNewPod)
router.delete('/delete/:id', controller.deletePodById)
router.patch('/alterar/:id/nota', controller.updatePodStars)

module.exports = router


