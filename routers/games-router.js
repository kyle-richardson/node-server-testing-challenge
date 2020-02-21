const express = require("express");

const db = require("../models/games-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.getGames()
    .then(games => {
      res.status(201).json(games);
    })
    .catch(err => {
      res
        .status(501)
        .json({ message: "Failed to get games", error: err.message });
    });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const game = await db.findBy({ id });
    res.status(201).json(games);
  } catch {
    res.status(501).json({ error: "server error" });
  }
});

router.post("/", (req, res) => {
  const newGame = req.body;
  db.addGame(newGame)
    .then(game => {
      res.status(201).json(game);
    })
    .catch(err => {
      res
        .status(501)
        .json({ message: "Failed to add game", error: err.message });
    });
});

router.delete("/:id/", async (req, res) => {
  const { id } = req.params;
  try {
    const del_game = await db.remove(id);
    res.status(201).json(del_game);
  } catch {
    res.status(501).json({ error: "server error" });
  }
});

module.exports = router;
