const express = require('express') //importa o express

const app = express() //executa o express

app.use(express.json()) //uso o body parser

//importa de continuação de rotas podcast
const podRotas = require('./routes/podcastsRoutes')
const musicasRotas = require('./routes/musicasRoutes')

app.use('/podcast', podRotas) //crio uma rota raiz
app.use('/musicas', musicasRotas)

module.exports = app //exportanto para usar o server.js
