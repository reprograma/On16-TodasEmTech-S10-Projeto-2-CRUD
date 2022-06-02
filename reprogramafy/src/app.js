const express = require('express');

const app = express();

app.use(express.json())

const podRotas = require('./routes/podcastsRoutes')

const musicas = require('./routes/musicasRoutes')


app.use('/podcast', podRotas);

app.use('/musicas', musicas)

module.exports = app