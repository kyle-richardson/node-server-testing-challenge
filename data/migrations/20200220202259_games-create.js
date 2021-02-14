exports.up = function(knex) {
  return knex.schema.createTable("games", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .unique()
      .notNullable();
    tbl.integer("year").notNullable();
    tbl.string("company", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("games");
};
