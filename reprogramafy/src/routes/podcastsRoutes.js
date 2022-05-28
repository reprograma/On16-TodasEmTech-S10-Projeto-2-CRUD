const controller = require('../controller/podcastsController') //rota que acessa o arquivo controle dos Podcast
const express = require('express') //importa o express
const router = express.Router() //importa rotas do express

//Rotas http
router.get('/biblioteca', controller.getAllPods)
router.get('/biblioteca/tema', controller.getTopics)
router.post("/adicionar", controller.addPods)
router.patch('/atualizar/:id', controller.attPods)

//Permite exportar
module.exports = router