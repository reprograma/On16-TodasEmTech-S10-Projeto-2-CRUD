// centralizando o conteudo da aplicacao
// rota raiz
const express = require("express") //importando o express
const app = express () // executo o express

app.use(express.json()) // uso o body parser


//importe da continuacao das rotas de podcats
const podRoutes = require("./routes/podcastsRoutes")



app.use("/podcast", podRoutes)


module.exports = app