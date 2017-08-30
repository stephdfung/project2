const express = require('express');
const eventsRouter = express.Router();

const eventsController = require('../controller/events-controller');
const eventsHelper = require('../services/help');

eventsRouter.get('/', eventsController.index)
eventsRouter.get('/' , eventsHelper.getFromSeatGeek, eventsController.sendApiSeatGeek)

module.exports = eventsRouter;
