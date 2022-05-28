//chama o controller de podcasts
const controller = require('../controller/podcastsController')

//chamando express
const express = require('express')

// funcao de rotas de express
const router = express.Router()

// router, metodo http (rota, função)
router.get ("/biblioteca", controller.getAllPods)

// exportar para seer usado no app.js
module.exports = router