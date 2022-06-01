const controller = require("../controller/podcastsController");

const express = require("express");

const router = express.Router();

router.get("/biblioteca", controller.getAllPods);
router.get("/biblioteca/tema", controller.getPodByTopic);
router.post("/adicionar/", controller.addPods);
router.delete("/delete/:id", controller.deletePodcast);
router.patch("/atualizar/:id", controller.atualizarPods);

module.exports = router;
