const controller = require ('../controller/musicasController')

const express = require('express') 

const router = express.Router() 

router.get("/lista", controller.getAllMusic)
router.get("/music/:id", controller.getFavorite)
router.get("/listar/artista", controller.getArtist)
router.delete("/delete/:id", controller.deleteMusic)
router.put("/change/:id", controller.changeMusic)
router.patch("/favorited/:id", controller.favoritarMusic) 
router.post("/adicionar", controller.adicionarMusica)


module.exports = router 