const express = require('express');
const { authenticatorToken } = require('../middlewares/authenticatorToken');
const categoryController = require('../controller/categoryController');

const categoryRouter = express.Router();

categoryRouter.post('/', authenticatorToken, categoryController.postCategoryController);
categoryRouter.get('/', authenticatorToken, categoryController.getCategoryController);

module.exports = categoryRouter;