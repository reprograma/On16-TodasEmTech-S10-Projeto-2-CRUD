const express = require('express')// importo o express
const app = express()//executo o express

app.use(express.json())//faço o body parser

const musicRotas = require('./routes/musicasRoutes.js')//estabeleci o caminho para as rotas de músicas
const podRotas = require('./routes/podcastsRoutes.js')//estabeleço o caminho para rotas de podcast

app.use('/podcast', podRotas)// essa é minha rota raiz para os Podcasts
app.use('/reprogramafy', musicRotas)

module.exports = app
