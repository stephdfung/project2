const express = require('express');
const eventsController = require('../controller/events-controller');
const eventsRouter = express.Router();

eventsRouter.get('/', eventsController.index)

module.exports = eventsRouter;
