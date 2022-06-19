// AS ROTAS E METODOS 
const controller = require('../controller/podcastsController')// passo 1

const express = require('express') // chamando express

const router = express.Router()// funcao de rotas do express

// router. metodo http (rota, funcao)
router.get('/biblioteca', controller.getAllPods)
router.get('/biblioteca/tema', controller.getTopics)
router.post('/adicionar', controller.addPods)
router.patch('/atualizar/:id', controller.updateStars)
router.delete("/delete/:id", controller.deletePodcasts)

//exportando para ser usado no app.js
module.exports = router
