const express = require("express");
const configureMiddleware = require("./configure-middleware.js");
const GamesRouter = require("../routers/games-router");

const server = express();
configureMiddleware(server);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.use("/api/games", GamesRouter);

module.exports = server;
