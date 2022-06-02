const express = require('express')

const app = express()

app.use(express.json())

const podRoutes = require('./routes/podcastsRoutes') //importa continuação das rotas de podcasts
const musicRoutes = require('./routes/musicasRoutes') //importa continuação das rotas de músicas

app.use('/podcast', podRoutes) //rota raiz
app.use('/music', musicRoutes) //rota raiz

module.exports = app 