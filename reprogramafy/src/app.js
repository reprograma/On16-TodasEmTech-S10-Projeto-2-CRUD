// centralizando o conteudo da aplicacao
// rota raiz
const express = require("express") 

const musicasRoutes = require("./routes/musicasRoutes")
const podcastsRoutes = require("./routes/podcastsRoutes")

const app = express() 

app.use(express.json()) 

app.use("/playlist", musicasRoutes)
app.use("/podlist", podcastsRoutes)

module.exports = app
