const express = require('express')

const app = express()

app.use(express.json())

const podRotas = require('./routes/podcastsRoutes')
const musicRotas = require('./routes/musicasRoutes')

app.use('/podcast', podRotas)
app.use('/musicas', musicRotas)

module.exports = app