const app = require('./src/app')

const PORT = 3000
app.listen(PORT , ()=>{
    console.log(`Server Playlist foi iniciado  na porta ${PORT}`)
})