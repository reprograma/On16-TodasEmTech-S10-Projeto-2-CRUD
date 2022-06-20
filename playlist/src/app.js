const express = require("express") 

const app = express() 

app.use(express.json())

const musicasRotas = require('./routes/musicasRoutes')

app.use("/musicas", musicasRotas) 

module.exports = app
