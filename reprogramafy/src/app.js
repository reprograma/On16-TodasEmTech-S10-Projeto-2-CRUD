const express = require('express')

const app = express()

app.use(express.json()) // uso body parser


const podRotas = require('./routes/podcastsRoutes')
const musicsRotas = require('./routes/musicasRoutes')

app.use('/podcast', podRotas) // rota raiz
app.use('/musics',musicsRotas) // rota raiz


module.exports = app