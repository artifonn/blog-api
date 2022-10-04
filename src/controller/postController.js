const postService = require('../services/postService');

const postGetController = async (_req, res, next) => {
  try {
    const posts = await postService.postGetController();
    return res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
};

const postGetControllerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getPostId = await postService.serviceGetPostId(id);

    if (!getPostId) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(getPostId);
  } catch (error) {
    next(error);
  }
};

module.exports = { postGetController, postGetControllerId };