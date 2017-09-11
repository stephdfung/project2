const express = require('express');
const favoritesRouter = express.Router();
const favoritesController = require('../controller/favorites-controller');

favoritesRouter.post('/', favoritesController.create);
// favoritesRouter.delete('/events/favorites', favoritesController.destroy);

module.exports = favoritesRouter;
