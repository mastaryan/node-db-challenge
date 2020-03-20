exports.seed = function(knex) {
  const tasks = [
    {id: 1, task_number: 1, description: "build evil scientist stuff", notes: "can be tool of choice", completed: false, project_id: 1},
    {id: 2, task_number: 2, description: "implement evil scientist stuff", notes: "", completed: false, project_id: 1},
    {id: 3, task_number: 1, description: "find the revengee", notes: "could be whatever or anybody", completed: false, project_id: 2},
    {id: 4, task_number: 2, description: "take the revenge!", notes: "choose whatever method you see fit", completed: false, project_id: 2},
    {id: 5, task_number: 1, description: "hack the servers of the largest conglomerate, set a backdoor", notes: "exactly what it sounds like", completed: false, project_id: 3},
    {id: 6, task_number: 2, description: "remove all digital and paper records", notes: "paper records is harder to get to", completed: false, project_id: 3},
    {id: 7, task_number: 3, description: "phase 2?, what's phase 2?", notes: "whiterose", completed: false, project_id: 3},
  ]
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert(tasks);
    });
};