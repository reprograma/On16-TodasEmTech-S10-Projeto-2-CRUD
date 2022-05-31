// Configurando a porta do nosso servidor - Criando nosso server

const app = require('./src/app') // Chamando o arquivo app.js

const PORT = 1313 // Configurando a porta


// Iniciando server
app.listen(PORT, () => {
    console.log(`Seu servidor está na porta ${PORT}`)
})