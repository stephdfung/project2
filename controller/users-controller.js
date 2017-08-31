const User = require('../model/users');

const userController = {};

userController.index = (req, res) => {
  User.findAll()
    .then(users => {
      res.render('users/user-index', {
        users: users,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

userController.show = (req, res) => {
  User.findById(req.params.id)
    .then(users => {
      res.render('users/user-show', {
        users: users,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

userController.create = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then(users => {
    res.redirect(`/users/${users.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

userController.edit = (req, res) => {
  User.findById(req.params.id)
    .then(users => {
      res.render('users/user-edit', {
        users: users,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

userController.update = (req, res) => {
  User.update({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }, req.params.id).then(user => {
    res.redirect(`/users/${user.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

userController.delete = (req, res) => {
  User.destroy(req.params.id)
    .then(() => {
      res.redirect('/users');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = userController;
