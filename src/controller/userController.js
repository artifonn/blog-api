require('dotenv/config');
const jwt = require('jsonwebtoken');

const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;
const userController = async (req, res, next) => {
  try {
    const { email, password, displayName, image } = req.body;
    await userService.serviceUser({ email, password, displayName, image });

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ email }, secret, jwtConfig);
    const HTTP_OK_STATUS = 201;

    return res.status(HTTP_OK_STATUS).json({ token });
  } catch (error) {
    next(error);
  }
};

const getUserController = async (_req, res, next) => {
  try {
    const getUser = await userService.getUserController();
    return res.status(200).json(getUser);
  } catch (error) {
    next(error);
  }
};

const getUserIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = await userService.getUserIdController(id);

    if (!userId) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(userId);
  } catch (error) {
    next(error);
  }
};

module.exports = { userController, getUserController, getUserIdController };