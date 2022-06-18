// AS ROTAS E METODOS 
const controller = require('../controller/podcastsController')// passo 1

const express = require('express') // chamando express

const router = express.Router()// funcao de rotas do express

// router. metodo http (rota, funcao)
router.get('/biblioteca', controller.getAllPods)
router.get('/biblioteca/tema', controller.getTopics)

router.post('/pods', controller.createPod)
router.patch('/pods/:id/stars', controller.updateStars)
// TODO router.delete("/pods/:id", controller.deletePod)

//exportando para ser usado no app.js
module.exports = router
