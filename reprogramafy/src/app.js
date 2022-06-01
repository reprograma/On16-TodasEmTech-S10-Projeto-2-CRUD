const express = require('express')

const app = express()

app.use(express.json())


const podRoutes = require('./routes/podcastsRoutes')
const musicRoutes = require('./routes/musicasRoutes')

app.use('/podcast', podRoutes)
app.use('/playlist', musicRoutes)

module.exports = app