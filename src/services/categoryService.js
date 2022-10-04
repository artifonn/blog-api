const { Category } = require('../models');

const postServiceCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const getServiceCategory = async () => {
  const category = await Category.findAll();
  return category;
};

module.exports = { postServiceCategory, getServiceCategory };