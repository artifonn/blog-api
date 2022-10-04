const { BlogPost, User, Category } = require('../models');

const postGetController = async () => {
  const postsAll = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' }],
  });
  return postsAll;
};

const serviceGetPostId = async (id) => {
  const posts = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
    // include: [{ model: Book, as: 'books', through: { attributes: [] } }],
  });
  return posts;
};

module.exports = { postGetController, serviceGetPostId };