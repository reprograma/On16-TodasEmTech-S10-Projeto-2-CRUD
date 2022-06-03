const controller = require('../controller/podcastsController');

const express = require('express'); //chamando express

const router = express.Router(); //funcao de rotas de express

router.get("/biblioteca", controller.getAllPods); // router.metodo htpp (rota, funcao)
router.get("/biblioteca/tema", controller.getTopics);
router.post("/adicionar", controller.addPodcast);
router.patch("/atualizar/:id", controller.attPodcast);
router.delete("/deletar/:id", controller.deletePodcast)

module.exports = router; //exportar para ser usado no app.js