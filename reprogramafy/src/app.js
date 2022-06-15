const express = require("express") 


const musicasRoutes= require('./routes/musicasRoutes')
const podcastsRoutes = require("./routes/podcastsRoutes")


const app = express() 

app.use(express.json()) 


app.use("/pods", podcastsRoutes)
app.use('/playlist', musicasRoutes )








module.exports = app