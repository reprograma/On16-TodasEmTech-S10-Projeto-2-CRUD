// centralizando o conteudo da aplicacao

//importando o express
const express = require("express") 

//importe da continuacao das rotas
const musicasRoutes = require("./routes/musicasRoutes")
const podcastsRoutes = require("./routes/podcastsRoutes")

// executo o express
const app = express() 

// uso o bodyparser para manipular os dados do json
app.use(express.json()) 

// criar uma rota raiz
app.use("/reprofy", musicasRoutes)
app.use("/podlist", podcastsRoutes)


// exportando para usar o server.js
module.exports = app
