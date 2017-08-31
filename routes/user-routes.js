// import dependencies
const express = require('express');
// initialize router
const userRouter = express.Router();

const userController = require('../controller/users-controller');

// initial two routes
userRouter.get('/', userController.index);
userRouter.post('/', userController.create);

userRouter.get('/new', (req, res) => {
  res.render('users/user-add');
});

userRouter.get('/:id', userController.show);
userRouter.get('/:id/edit', userController.edit);
userRouter.put('/:id', userController.update);

userRouter.delete('/:id', userController.delete);


module.exports = userRouter;
