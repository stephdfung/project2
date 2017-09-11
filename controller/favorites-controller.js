const Favorite = require('../model/favorites');

const favoritesController = {};

favoritesController.create = (req, res) => {
  Favorite.create({
    user_id: req.body.user_id,
    event_id: req.body.event_id,
  }).then(favorite => {
    res.redirect(`/favorites/${favorite.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

favoritesController.destroy = (req, res) => {
  console.log('inside favorites controller destroy')
  Favorite.destroy(req.body.id)
    .then(() => {
      res.redirect('/events/favorites');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = favoritesController;
