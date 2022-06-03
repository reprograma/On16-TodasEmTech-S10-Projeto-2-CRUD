const express = require('express'); //importa o express

const app = express(); //executa o express

app.use(express.json()); // uso o body parser

const musicsRotas = require('./routes/musicasRoutes');
const podRotas = require('./routes/podcastsRoutes'); //importe da continuacao de rotas podcasts

// criacao da rota raiz
app.use('/playlist', musicsRotas);
app.use('/podcasts', podRotas);

//exportando pra usar o server.js
module.exports = app
