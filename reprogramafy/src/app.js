const express = require('express') //Importo o express

const app = express() //Executo o express

app.use(express.json()) //Uso o body parser

//importe da continuacao de rotas podcasts
const podRotas = require('./routes/podcastsRoutes')

app.use("/podcast", podRotas) //Crio uma rota raiz

//Exportando para usar o server.js






app.use(express.json()) //Uso o body parser

//importe da continuacao de rotas podcasts
const musicaRotas = require('./routes/musicasRoutes')

app.use('/musicas', musicaRotas) //Crio uma rota raiz

//Exportando para usar o server.js
module.exports = app