
const routes = require('express').Router();
const usersController = require('../controllers/users');

routes.get('/', usersController.home);

routes.get('/hello', usersController.hello);

module.exports = routes;