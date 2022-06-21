const express = require('express')

const app = express()

app.use(express.json())// body parser no .json é para informar que estamos trabalhando no formato json

const musicRotas = require('./routes/musicasRoutes')// importa a continuação das rotas

app.use('/musicas', musicRotas)// rota raiz

// para ser usado em outros arquivos
module.exports = app

// na linha 9 o /musica e o caminho que eu vou usar no postman.

// na linha 5 está indicando que a API pede retorno no formato json, se nao informar poderá retornar o codigo desconfigurado.
