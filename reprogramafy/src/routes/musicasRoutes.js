// AS ROTAS E METODOS DE MÚSICAS

// chamar o controller de podcasts
const controller = require('../controller/musicasController')


const express = require('express') // chamando express

// funcao de rotas do express
const router = express.Router()

// router. metodo http (rota, funcao)

router.get('/musics', controller.getAllMusic)
router.get('/musics/artists', controller.getMusicByArtist)
router.get('/musics/:id', controller.getMusicById)
router.post('/musics', controller.createMusic)
router.put('/musics/:id', controller.updateMusic)
router.delete('/musics/:id', controller.deleteMusicById)
router.patch('/musics/:id/favorited', controller.updateFavorited)


//exportando para ser usado no app.js
module.exports = router