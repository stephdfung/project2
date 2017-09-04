const Event = require('../model/events');

const eventController = {};

eventController.index = (req, res) => {
  Event.findAll()
    .then(events => {
      res.render('events/event-index', {
        events: events,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

eventController.sendApiSeatGeek = (req, res) => {
  res.render('events/event-show', {
    event: res.locals.eventData
  })
};

eventController.create = (req, res, next) => {
  console.log('Inside events post route')
  console.log(req.body)
  Event.create({
    name: req.body.name,
    location: req.body.location,
    image: req.body.image,
    url: req.body.url,
  }, req.user.id)
  .then(event => {
    res.redirect(`/`)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

eventController.edit = (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      res.render('events/event-edit', {
        event: event,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

eventController.update = (req, res) => {
  Event.update({
    name: req.body.name,
    location: req.body.location,
    url: req.body.url,
  }, req.params.id).then(event => {
    res.redirect(`/events/${event.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

eventController.delete = (req, res) => {
  Event.destroy(req.params.id)
    .then(() => {
      res.redirect('/events');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = eventController;
