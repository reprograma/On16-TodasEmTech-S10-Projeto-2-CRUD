
const express = require("express") //importando o framework express passo 1

const app = express() // executo o express passo 2

app.use(express.json()) // uso o bodyparser passo 3

//importe da continuacao das rotas do podcasts

const musicsRotas = require("./routes/musicasRoutes")//  passo 4

// criar uma rota raiz

app.use("/musicas", musicsRotas) // passo 5


// exportando para usar o server.js passo 6
module.exports = app
