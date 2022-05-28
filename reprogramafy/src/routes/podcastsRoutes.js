//chama as funções que estão dentro da pasta controller de podcast
const controller = require('../controller/podcastsController')

const express = require('express')

// função de rotas do Express
const router = express.Router()

//rota para retornar todos os podcasts
//localhost:1313/podcast/biblioteca
router.get('/biblioteca', controller.getAllPods)

router.get('biblioteca/tema', controller.getTopics)
router.get("/biblioteca/tema", controller.getTopics)
router.post("/adicionar", controller.addPods)
router.delete("/delete/:id", controller.deletePods)
router.patch("/atualizar/:id", controller.atualizarPods)




//exportar para ser usad no app.js
module.exports = router