// centralizando o conteudo da aplicacao

const express = require("express") //importando o express

const app = express() // executo o express

app.use(express.json()) // uso o bodyparser

const musicasRoutes = require("./routes/musicasRoutes")
const podcastsRoutes = require("./routes/podcastsRoutes")

// criar uma rota raiz

app.use("/playlist", musicasRoutes)
app.use("/podlist", podcastsRoutes)


// exportando para usar o server.js
module.exports = app