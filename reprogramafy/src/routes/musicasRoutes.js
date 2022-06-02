// rotas



// linkar controller das músicas
const controller = require('../controller/musicasController')

const express = require('express') // chamando express

// funcao de rotas do express
const router = express.Router()

// router.metodohttp (rota, funcao)

// {get} /musics
//       - retorna todas as músicas
router.get('/playlist/allsongs', controller.getSongs)
// {get} /musics/:id 
//       - Retornar música espicífica
router.get('/song/:id', controller.getSongById)
// {get} /musics/artists
//       - Retornar música de artista espicífica
router.get('/artists', controller.getSongByArtist)
// {post} /musics 
//       - cadastrar nova música
router.post('/newsong', controller.addSong)
// {put} /musics/:id
//       - atualizar música espicífica
router.put('/updatesong/:id', controller.updateSong)
// {delete} /musics/:id 
//          - Deletar música específica
router.delete('/delete/:id', controller.deleteSong)
// {patch} /musics/:id/favorited 
//         - favoritar/desfavoritar música
router.patch('/favorited/:id', controller.updateFavs)



//exportando para ser usado no app.js
module.exports = router