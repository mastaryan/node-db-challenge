exports.seed = function(knex) {
  const projects = [
    {id: 1, name: "World Domination", description: "Own the world", completed: false},
    {id: 2, name: "Revenge", description: "best served cold", completed: false},
    {id: 3, name: "Eliminate all world debt", description: "taking down the largest conglomerate", completed: false}
  ]
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert(projects);
    });
};