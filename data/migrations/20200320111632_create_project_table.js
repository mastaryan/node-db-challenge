exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
        tbl.increments()
        tbl.string("name", 256).notNullable().index()
        tbl.string("description", 256)
        tbl.bool("completed").setDefault("false")
    })
    .createTable("resources", tbl => {
        tbl.increments()
        tbl.string("name", 256).notNullable().unique().index()
        tbl.string("description", 256)
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
    .createTable("tasks", tbl => {
        tbl.increments()
        tbl.integer("task_number").unsigned().notNullable()
        tbl.string("description", 256).notNullable().index()
        tbl.string("notes", 256)
        tbl.bool("completed").notNullable().setDefault(false)
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("projects")
  .dropTableIfExists("tasks")
  .dropTableIfExists("resources")
};