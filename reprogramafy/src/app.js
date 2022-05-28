const express = require ('express') //importa o express

const app = express () // executa o express

app.use (express.json ()) // usa o body parser para definir o formato do que for recebido no body para Json

const podRotas = require ('./routes/podcastsRoutes') //guardando na const as demais rotas que serão configuradas

app.use ('/podcast', podRotas) //rota raíz

module.exports = app