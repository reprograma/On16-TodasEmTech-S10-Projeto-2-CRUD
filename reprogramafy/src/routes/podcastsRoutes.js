// chamar o controller de podcat
const controller = require('../controller/podcastsController')
// chamando express
const express = require ('express')
// funcão que chama as rotas de express
const router = express.Router()

// router. metodo http (rota, função)

router.get('/biblioteca', controller.getAllPods)


// exportar para ser usadno no app.js


module.exports = router