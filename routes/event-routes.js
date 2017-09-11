// import dependencies
const express = require('express');
// initialize router
const eventRouter = express.Router();
const eventHelper = require('../services/help');
const authHelper = require('../services/auth/auth-helpers');
const favoritesController = require('../controller/favorites-controller');
const eventController = require('../controller/events-controller');

// initial two routes
// eventRouter.get('/', eventController.index);
eventRouter.post('/', eventHelper.getFromSeatGeek, eventController.sendApiSeatGeek);
eventRouter.post('/favorites', authHelper.loginRequired, eventController.create, eventController.join, eventController.favorite);
eventRouter.delete('/favorites', favoritesController.destroy);
eventRouter.get('/favorites', authHelper.loginRequired, eventController.join, eventController.favoritesShow);


// eventRouter.get('/:id', eventController.show);
// eventRouter.put('/:id', eventController.update);

// eventRouter.delete('/:id', eventController.delete);

module.exports = eventRouter;
