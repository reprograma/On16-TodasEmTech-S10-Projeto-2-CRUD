const express = require('express')// importo o express
const app = express()//executo o express

app.use(express.json())//faço o body parser

const podRotas = require('./routes/podcastsRoutes')//estabeleço o caminho para rotas de podcast
const musicRotas = require ('./routes/musicasRoutes')//estabeleci o caminhos para as rotas de músicas

app.use('/podcast', podRotas)// essa é minha rota raiz para os Podcasts
app.use('/musica', musicRotas)

module.exports = app
