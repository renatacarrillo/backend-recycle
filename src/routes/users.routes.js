const express = require('express');
const routes = express.Router();

const authentication = require('../middlewares/authentication');

const { UsersController } = require('../controllers/users.controller');

/**rotas apartir do '/api/v1/users' */
routes.get('/', UsersController.apiGetAllUsers);

routes.post('/create-auth', UsersController.apiCreateAuth);

routes.get('/:id', authentication, UsersController.apiGetUser);

routes.put('/:id', authentication, UsersController.apiAlterUser);

routes.delete('/:id', authentication, UsersController.apiDeleteUser);

routes.post('/', UsersController.apiAddUser);

module.exports = routes;