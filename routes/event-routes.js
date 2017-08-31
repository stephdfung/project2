// import dependencies
const express = require('express');
// initialize router
const eventRouter = express.Router();
const eventHelper = require('../services/help');

const eventController = require('../controller/events-controller');

// initial two routes
// eventRouter.get('/', eventController.index);
eventRouter.post('/', eventHelper.getFromSeatGeek, eventController.sendApiSeatGeek);
eventRouter.post('/', eventController.create);

// eventRouter.get('/:id', eventController.main);

eventRouter.get('/new', (req, res) => {
  res.render('events/event-add');
});

eventRouter.get('/:id', eventController.show);
eventRouter.get('/:id/edit', eventController.edit);
eventRouter.put('/:id', eventController.update);

eventRouter.delete('/:id', eventController.delete);


module.exports = eventRouter;
