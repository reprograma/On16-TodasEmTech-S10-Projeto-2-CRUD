const express = require('express') 
const app = express() 
const podRotas = require('./routes/podcastsRoutes')
const musicasRotas = require('./routes/musicasRoutes') 

app.use(express.json()) 
app.use('/podcast', podRotas) 
app.use('/musicas', musicasRotas)

module.exports = app
