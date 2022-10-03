const express = require('express');
const userController = require('../controller/userController');
const { validateEmail, validateNamePass } = require('../middlewares/userMiddlewares');

const userRouter = express.Router();

userRouter.post('/', validateNamePass, validateEmail, userController.userController);

module.exports = userRouter;