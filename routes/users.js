
const express = require('express');
const routes = express.Router();
const usersController = require('../controllers/users');

routes.get('/', usersController.home);

routes.get('/students', usersController.students);

routes.get('/teachers', usersController.teachers);

routes.get('/disabilities', usersController.disabilities);

module.exports = routes;