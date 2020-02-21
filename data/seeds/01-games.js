exports.seed = function(knex) {
  return knex("games").insert([
    { name: "Fortnite", year: 2017, company: "Epic" },
    { name: "Diablo 3", year: 2012, company: "Blizzard" },
    { name: "Hearthstone", year: 2014, company: "Blizzard" },
    { name: "Destiny 2", year: 2017, company: "Bungie" }
  ]);
};
