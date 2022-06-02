const express = require("express") //importando o express
const app = express () // executo o express

app.use(express.json()) // uso o body parser

//importe da continuacao das rotas de podcats
const podRoutes = require("./routes/podcastsRoutes")
const musicRoutes = require("./routes/musicasRoutes")



app.use("/podcast", podRoutes)
app.use("/musicas", musicRoutes)

module.exports = app
