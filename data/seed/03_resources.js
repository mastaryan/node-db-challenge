exports.seed = function(knex) {
  const resources = [
    {id: 1, name: "science equipment", description: "assorted", project_id: 1},
    {id: 2, name: "anything?", description: "whoah, lots of choices", project_id: 2},
    {id: 3, name: "access to a computer with kali linux", description: "exactly what it sounds like", project_id: 3}
  ]
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert(resources);
    });
};