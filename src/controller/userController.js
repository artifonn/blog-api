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

module.exports = { userController };