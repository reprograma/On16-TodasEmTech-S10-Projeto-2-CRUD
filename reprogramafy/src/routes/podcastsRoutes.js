const controller = require('../controller/podcastsController')


const express = require('express') // chamando express


const router = express.Router()






router.get('/podcasts', controller.getAllPods)
router.get('/topic', controller.getPodByTopic)
router.post('/add', controller.createPod)
router.patch('/podcasts/:id/stars', controller.updateStars)
router.delete('/:id', controller.deletePod)







module.exports = router