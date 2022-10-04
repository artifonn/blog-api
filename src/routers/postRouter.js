const express = require('express');
const { authenticatorToken } = require('../middlewares/authenticatorToken');
const postController = require('../controller/postController');

const postRouter = express.Router();

postRouter.get('/', authenticatorToken, postController.postGetController);
postRouter.get('/:id', authenticatorToken, postController.postGetControllerId);

module.exports = postRouter;
