const controller = require ('../controller/musicasController')

const express = require ('express')

const router = express.Router()

// - [x] poder listar todas as músicas da playlist do usuário
router.get ('/musicas', controller.listarMusicas)

// - [x] poder listar apenas uma música específica
router.get ('/musicas/buscar/:id', controller.buscarMusica)

// - [x] poder listar  músicas de um artista específico
router.get ('musicas/artista', controller.musicaPorArtista)

// - [x] poder adicionar uma nova música
router.post ('/musicas', controller.adicionarMusica)

// - [x] poder remover uma música da lista
router.delete ('/delete/:id', controller.deletarMusica)

// - [x] poder alterar informações da música
router.put ('/alterar/:id', controller.alterarMusica)

// - [x] poder favoritar/desfavoritar uma música
router. patch ('/atualizar/:id', controller.atualizarMusica)

//exportar para ser usad no app.js
module.exports = router

