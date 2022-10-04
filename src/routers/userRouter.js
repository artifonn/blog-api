const express = require('express');
const userController = require('../controller/userController');
const { authenticatorToken } = require('../middlewares/authenticatorToken');
const { validateEmail, validateNamePass } = require('../middlewares/userMiddlewares');

const userRouter = express.Router();

userRouter.post('/', validateNamePass, validateEmail, userController.userController);
userRouter.get('/', authenticatorToken, userController.getUserController);

module.exports = userRouter;