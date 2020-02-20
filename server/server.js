const express = require("express");
const configureMiddleware = require("./configure-middleware.js");

const server = express();
configureMiddleware(server);

server.get("/", (res, req) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;
