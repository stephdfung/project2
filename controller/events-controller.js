const eventsController = {};

eventsController.index = (req, res) => {
  res.json({
    message: 'Here is our events index route',
  });
}

eventsController.sendApiSeatGeek = (req, res) => {
  res.json({
    message: `Events in ${req.params.city}`,
    events: res.locals.eventsData,
  })
}

module.exports = eventsController;
