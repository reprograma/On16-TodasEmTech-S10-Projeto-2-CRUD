const express = require('express') //importando o express

const app = express() // executando o express

app.use(express.json()) // usando o body parser

const podRotas = require('./routes/podcastsRoutes')
const musicRotas = require('./routes/musicasRoutes')

app.use('/podcast', podRotas) //criando uma rota raiz
app.use('/musicas', musicRotas)

// exportando para usar o server.jd
module.exports = app
