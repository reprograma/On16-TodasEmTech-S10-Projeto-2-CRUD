const express = require("express")
const app = express()

app.use(express.json())


const musicRoutes = require('./routes/musicasRoutes')

app.use('/playlist', musicRoutes)

const podcastsRoutes = require("./routes/podcastsRoutes")

app.use('/podlist', podcastsRoutes)
module.exports = app
