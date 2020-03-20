const express = require('express');
const ProjectsRouter = require('./projects/projects-router');
const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);

module.exports = server;