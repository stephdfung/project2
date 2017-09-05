const Event = require('../model/events');
const Favorite = require('../model/favorites');

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
  res.render('events/search', {
    event: res.locals.eventData
  })
};

eventController.show = (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      res.render('event/event-show', {
        event: event,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

//saving the api info to the local events table
eventController.create = (req, res, next) => {
  console.log('Inside events post route')
  Event.create({
    name: req.body.name,
    location: req.body.location,
    image: req.body.image,
    url: req.body.url,
  }, req.user.id)
  .then(event => {
    res.locals.event = event
    next();
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

eventController.join = (req, res, next) => {
  Favorite.display(req.user.id)
  .then(favorite => {
    res.locals.favorite = favorite
    next();
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

//saving the user id and the new event id to the favorites table
eventController.favorite = (req, res, next) => {
  Favorite.create({
    user_id: req.user.id,
    event_id: res.locals.event.id
  }).then(favorite => {
    res.render('events/favorites', {
      favorite: favorite,
      event: res.locals.event,
      allFavorites: res.locals.favorite
    })
    next();
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

eventController.delete = (req, res, next) => {
  Favorite.destroy(req.params.id)
    .then((event) => {
      res.redirect('/favorites');
      next();
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = eventController;
