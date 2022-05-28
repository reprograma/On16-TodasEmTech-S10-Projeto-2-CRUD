const express = require('express')
const app = express()

app.use(express.json())

const podRotas = require('./routes/podcastsRoutes')

app.use('/podcast', podRotas)

module.exports = app