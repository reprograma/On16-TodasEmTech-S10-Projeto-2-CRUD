const express = require("express")

const app = express()

app.use(express.json())

const podRotas = require("./routes/podcastsRoutes")
const musicasRotas = require("./routes/musicasRoutes")

app.use("/podcast", podRotas)
app.use("/musicas", musicasRotas)

module.exports = app