// centralizando o conteudo da aplicacao
// rota raiz
const express = require("express") //importando o framework express passo 1

const app = express() // executo o express passo 2

app.use(express.json()) // uso o bodyparser passo 3

//importe da continuacao das rotas do podcasts

const podRotas = require("./routes/podcastsRoutes")// para guardar o podRotas passo 4

// criar uma rota raiz

app.use("/podcasts", podRotas) // passo 5
// o barra podcast eu vou usar no postman = caminho

// exportando para usar o server.js passo 6
module.exports = app
