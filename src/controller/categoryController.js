const categoryService = require('../services/categoryService');

const postCategoryController = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    const newCategory = await categoryService.postServiceCategory({ name });
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const getCategoryController = async (req, res, next) => {
  try {
    const getCategory = await categoryService.getServiceCategory();
    return res.status(200).json(getCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = { postCategoryController, getCategoryController };