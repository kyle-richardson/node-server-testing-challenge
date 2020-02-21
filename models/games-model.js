const db = require("../data/dbConfig");

module.exports = {
  getGames,
  findBy,
  addGame,
  remove
};

function getGames() {
  return db("games");
}

function findBy(filter) {
  return db("games")
    .where(filter)
    .first();
}

function addGame(newGame) {
  return db("games")
    .insert(newGame, "id")
    .then(ids => {
      const [id] = ids;
      return findBy({ id });
    });
}
async function remove(gameId) {
  const gameToDelete = await findBy({ id: gameId });
  return await db("games")
    .where("games.id", gameId)
    .del()
    .then(prom => {
      if (prom === 1) return gameToDelete;
      else return prom;
    });
}
