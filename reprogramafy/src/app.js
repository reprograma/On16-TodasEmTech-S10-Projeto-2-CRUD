const express = require('express')//importo o express

const app = express()// executo o express

app.use(express.json())//uso o body parser. Diz que quando se jogar a resposta, ela vai retornar em json

//importe da continuacao de rotas podcasts
const podcastsRoutes = require('./routes/podcastsRoutes')

app.use("/podlist", podcastsRoutes)//crio uma rota raiz pra podcast

//importe da rota de música

const musicasRoutes = require('./routes/musicasRoutes')

app.use("/playlist", musicasRoutes)// crio uma rota raiz pra música

//exportando para usar o server.js
module.exports = app