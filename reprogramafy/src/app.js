const express = require("express");

const musicsRoutes = require("./routes/musicasRoutes");
const podcastsRoutes = require("./routes/podcastsRoutes");

const app = express();

app.use(express.json());

app.use("/playlist", musicsRoutes);
app.use("/podlist", podcastsRoutes);

module.exports = app;
