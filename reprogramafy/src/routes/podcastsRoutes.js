// chama o controller de podcast
const controller = require('../controller/podcastsController')


const express = require('express') // chamando express

const router = express.Router() // funcao de rotas de express

 // router.metodo http (rota, funcao)
router.get("/biblioteca", controller.getAllPods)

router.get("/biblioteca/tema", controller.getTopics)

router.post("/adicionar", controller.addPods)

router.patch("/atualizar/:id", controller.atualizarPods)

router.delete("/delete/:id", controller.deletePods)



module.exports = router //exportar para ser usado no app.js


