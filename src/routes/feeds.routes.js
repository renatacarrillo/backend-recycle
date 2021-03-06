const express = require('express');
const routes = express.Router();

const FeedController = require('../controllers/feeds.controller');

/**rotas apartir do '/api/v1/feeds' */
routes.post('/', FeedController.apiPostFeed);

routes.get('/', FeedController.apiGetAllFeed);

routes.put('/:feedId', FeedController.apiAlterFeed);

routes.get('/:feedId', FeedController.apiGetFeed);

routes.delete('/:feedId', FeedController.apiDeleteFeed);

module.exports = routes;
