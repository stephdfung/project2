const bcrypt = require('bcryptjs');
const User = require('../model/users.js');

const usersController = {};

usersController.index = (req, res) => {
  res.json({
    user: req.user,
    data: 'Put a user profile on this route'
  });
}

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/events/favorites');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

module.exports = usersController;
