const express = require("express"); //importo o express

const app = express(); // executo o express

app.use(express.json()); // uso o body parse

// importe da continuação de rotas podcast
const podRotas = require("./routes/podcastsRoutes");

app.use("/reprogramafy/podcast", podRotas); // crio uma rota raiz

const musicRoutes = require("./routes/musicasRoutes");

app.use("/reprogramafy/playlist", musicRoutes);
// exportando para usar o server.js
module.exports = app;
