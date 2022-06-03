const controller = require("../controller/podcastsController");

const express = require("express");

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/biblioteca", controller.getAllPods);
router.get("/biblioteca/tema", controller.getTopics);
router.post("/adicionar", controller.addPods);
router.patch("/atualizar/:id", controller.atualizarPods);
router.delete("/deletar/:id", controller.deletePods);

module.exports = router;