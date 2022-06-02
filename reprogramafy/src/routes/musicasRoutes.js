const controller = require("../controller/musicasController")
const express = require("express")
const router = express.Router()

router.get("/playlist", controller.getAllMusic)


module.exports = router