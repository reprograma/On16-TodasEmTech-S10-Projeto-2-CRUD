const express = require('express') // importo o express

const app = express() // executo o express

app.use(express.json()) // use o body parser

const podRotas = require('./routes/podcastsRoutes') // importe da continuação de rotas podcasts
const musicaRotas = require('./routes/musicasRoutes') // importe da continuação de rotas músicas

app.use("/podcast", podRotas) // digo para meu app qual rota é minha rota raiz
app.use("/musica", musicaRotas)

module.exports = app // exportando para usar o server.js