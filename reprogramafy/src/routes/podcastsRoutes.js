const controller = require("../controller/podcastsController");

const express = require("express");

const podRouter = express.Router();

podRouter.get("/pods", controller.getAllPods);

podRouter.get("/pods/topic", controller.getPodByTopic);

podRouter.post("/newPod", controller.createPod);

podRouter.patch("/stars/:id", controller.updateStars);

podRouter.delete("/delete/:id", controller.deletePod)

module.exports = podRouter;
