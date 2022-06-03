const controller = require("../controller/musicasController");

const express = require("express");

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/biblioteca", controller.getAllMusic);
router.get("/biblioteca/musicas/:id", controller.getMusic);
router.get("/biblioteca/artistas", controller.getArtist);
router.post("/adicionar", controller.addMusic);
router.put("/alterar/:id", controller.updateMusic);
router.delete("/deletar/:id", controller.deleteMusic);
router.patch("/atualizar/:id", controller.updateFav);

module.exports = router;