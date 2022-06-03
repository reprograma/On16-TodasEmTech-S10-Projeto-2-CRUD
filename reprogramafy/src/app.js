const express = require('express') //importa o express
const app = express() //executa o express
app.use(express.json()) // body parser. Indica que o app está usando o formato json.
//Podcast 
const podRotas = require('./routes/podcastsRoutes') //importa rodas de acesso ao podcast
app.use('/podcast', podRotas) //rota padrão
//Musicas
const musicRotas = require('./routes/musicasRoutes') //importa rodas de acesso a musicas
app.use('/musicas', musicRotas)
//Exportação
module.exports = app //exporta  arquivo app. Permite que seja acessado em outros arquivos
