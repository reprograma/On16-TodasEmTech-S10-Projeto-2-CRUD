const express = require('express') // importo o express

const app = express() // executo o express

app.use(express.json()) // uso o body parser

const musicRotas = require('./routes/musicasRoutes') // importe da continuação de rotas

app.use("/playlist", musicRotas) // crio uma rota raiz

module.exports = app // exportando para usar o server.js

