exports.up = function (knex) {
  return knex.schema.createTable("greetings", (table) => {
    table.increments("id").primary();
    table.string("message", 200).notNullable();
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("greetings");
};
