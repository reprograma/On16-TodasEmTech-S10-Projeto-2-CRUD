const controller = require("../controller/musicasController")

const express = require("express")

const router = express.Router()

// rotas

router.get("/biblioteca", controller.getMusics)
router.get("/biblioteca/retornar/:id", controller.getForMusic)
router.get("/biblioteca/findByArtist", controller.getForArtist)
router.post("/adicionar", controller.addMusic)
router.put("/modificar/:id", controller.updateMusic)
router.patch("/atualizar/:id", controller.atualizarMusic)
router.delete("/delete/:id", controller.deleteMusic)


module.exports = router