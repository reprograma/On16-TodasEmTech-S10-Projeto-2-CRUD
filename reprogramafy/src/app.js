const express = require('express') // importo o express

const app = express() // executo o express

app.use(express.json()) // use o body parser

const podRotas = require('./routes/podcastsRoutes') // importe da continuação de rotas podcasts

app.use("/podcast", podRotas) // digo para meu app qual rota é minha rota raiz

module.exports = app // exportando para usar o server.js