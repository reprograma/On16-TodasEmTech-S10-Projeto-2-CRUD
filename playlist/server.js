const app = require('./src/app')

const PORT = 3000
app.listen(PORT , ()=>{
    console.log(`Servidor do Playlist foi iniciado com suscesso na porta ${PORT}`)
})