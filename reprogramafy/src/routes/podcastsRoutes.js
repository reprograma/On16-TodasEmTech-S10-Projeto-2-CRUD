const controller = require('../controller/podcastController.js')
const express = require('express')//chamando o express

const router = express.Router()//funcao de rotas de express 
//isso é um roteamento. o express cria manipuladores de rotas
//o Router() é uma função do expressão. deixamos ela estabelecida com os parâmetros
//e ela é acionada no servidor quando a gente clica o botão

//escrever os verbos http = router.METODO-VERBO(rota, funcao) - essa rota é vc que nomeia

router.get('/biblioteca', controller.getAllPods) //retornar todos os podcasts
router.get('/biblioteca/tema', controller.getTopics)
router.post('/adicionar/', controller.addPods)
router.patch('/atualizar/:id', controller.atualizarPods)
router.delete('/delete/:id', controller.deletePods)

module.exports = router