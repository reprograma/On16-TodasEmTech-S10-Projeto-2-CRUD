const controller = require("../controller/musicasController")
const express = require("express")

const router = express.Router()

router.get("/listarmusicas", controller.getAllmusica)
router.get("/musicas/:id", controller.getBuscarMusica)
router.get("/musicasPorArtista",controller.getArtist)
router.post("/adicionar/musica", controller.addMusica)
router.delete("/deleta/:id", controller.deleteMusica)
router.put("/alterarMusica/:id", controller.updateMusica)
router.patch("/favoritar/:id", controller.FavoritarMusica)


module.exports = router
