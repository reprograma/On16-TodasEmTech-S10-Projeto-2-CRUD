const controller = require("../controller/podcastsController");

const express = require("express");

const router = express.Router();

router.get("/library", controller.getAllPods);
router.get("/library/topic", controller.getPodByTopic);
router.post("/add/", controller.addPods);
router.delete("/delete/:id", controller.deletePodcast);
router.patch("/update/:id", controller.updatePods);

module.exports = router;
