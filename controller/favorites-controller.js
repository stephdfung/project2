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

favoritesController.delete = (req, res) => {
  Favorite.destroy(req.params.id)
    .then(() => {
      res.redirect('/favorites');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = favoritesController;
