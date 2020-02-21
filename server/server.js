const express = require("express");
const configureMiddleware = require("./configure-middleware.js");
const GamesRouter = require("../routers/games-router");

const server = express();
configureMiddleware(server);

server.use("/api/games", GamesRouter);

server.get("/", (res, req) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;
