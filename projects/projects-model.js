const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findTasks,
    findResources,
    addProject,
    addResource,
    addTask,
    update,
    remove
}

function find() {
    return db("projects")
}

function findById(id) {
    return db("projects")
        .where({ id })
        .first()
}

function findTasks(id) {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select("p.name as project_name", "t.task_number", "t.description", "t.notes", "t.completed")
        .where("t.project_id", id)
        .orderBy("t.task_number")
}

function findResources(id) {
    return db("resources as r")
        .join("projects as p", "p.id", "r.project_id")
        .select("p.name", "r.name", "r.description")
        .where("r.project_id", id)
}

function addProject(project) {
    return db("projects")
        .insert(project)
        .then(id => {
            return findById(id[0])
        })
}

function addResource(resource, id) {
    const addedRes = {...resource, project_id: id}
    return db("resources")
        .insert(addedRes)
        .then(() => {
            return findResources(id)
        })
}

function addTask(task, id) {
    const addedTask = {...task, project_id: id}
    return db("tasks")
        .insert(addedTask)
        .then(() => {
            return findTasks(id)
        })
}

function update(changes, id) {
    return db("projects")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("projects")
        .where({ id })
        .del()
}