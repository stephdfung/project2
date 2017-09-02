const express = require('express');
const favoritesRouter = express.Router();
const favoritesController = require('../controller/favorites-controller');

favoritesRouter.post('/', favoritesController.create);
favoritesRouter.delete('/:id', favoritesController.destroy);

module.exports = favoritesRouter;
