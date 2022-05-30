const express = require("express") //Importar o express

const app = express() //Executar o express

app.use(express.json()) //Usar o body parser

const musicasRoutes = require("./routes/musicasRoutes")
const podcastsRoutes = require("./routes/podcastsRoutes")

app.use("/playlist", musicasRoutes)
app.use("/podlist", podcastsRoutes)

module.exports = app 