const express = require("express");

const app = express();

app.use(express.json());

const musicRoutes = require("./routes/musicasRoutes");
const podRoutes = require("./routes/podcastsRoutes");

app.use("/playlist", musicRoutes);
app.use("/podcast", podRoutes);

module.exports = app;
