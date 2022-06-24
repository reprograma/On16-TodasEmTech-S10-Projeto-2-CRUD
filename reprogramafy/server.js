const app = require('./src/app') // chamo o arquivo app

const PORT = 1400 // configuro a porta

// mando o app ouvir a porta e inicia o server
app.listen(PORT, () => {
    console.log(`Seu servidor está na porta ${PORT}`)
})
