const app = require ('./src/app') //chama o arquivo app

const PORT = 1313 //configura a porta

app.listen (PORT, () => {
    console.log (`Seu servidor está na porta ${PORT}`)
}) // iniciando o server e dando retorno no console