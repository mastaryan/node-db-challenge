const express = require('express');
const Projects = require('./projects-model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "cannot get projects" })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Projects.findById(id)
        .then(project => {
            project
            ? res.status(200).json(project)
            : res.status(404).json({ error: "project not found"})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "cannot retrieve project" })
        })
})

router.get('/:id/resources', (req, res) => {
    const { id } = req.params
    Projects.findResources(id)
        .then(resource => {
            resource.length 
            ? res.status(200).json(resource)
            : res.status(404).json({ error: "could not find resource" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "could not get resource" })
        })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params
    Projects.findTasks(id)
        .then(tasks => {
            tasks.length 
            ? res.status(200).json(tasks)
            : res.status(404).json({ error: "could not find tasks" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "could not get tasks" })
        })
})

router.post('/', (req, res) => {

})

router.post('/:id/resources', (req, res) => {

})

router.post('/:id/tasks', (req, res) => {

})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    Projects.findById(id)
        .then(project => {
            project
            ? Projects.update(changes, id)
                .then(updated => {
                    res.status(200).json(updated)
                })
            : res.status(404).json({ error: "cannot find project" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "cannot update project" })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Projects.remove(id)
        .then(deleted => {
            deleted
            ? res.status(200).json(deleted)
            : res.status(404).json({ error: "cannot find project" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "cannot delete project" })
        })
})

module.exports = router;