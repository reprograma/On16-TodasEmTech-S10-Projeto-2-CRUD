const controller = require('../controller/musicasController')

const express = require('express') 

const router = express.Router()

// router. metodo http (rota, funcao)
router.get('/todas', controller.getAllMusic)

/*router.get('/biblioteca/tema', controller.getTopics)
router.post('/adicionar', controller.addPods)
router.patch('/atualizar/:id', controller.updateStars)
router.delete("/delete/:id", controller.deletePodcasts)
*/


//exportando para ser usado no app.js
module.exports = router

