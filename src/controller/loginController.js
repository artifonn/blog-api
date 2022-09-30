require('dotenv/config');
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;

const validateData = (email, password) => email && password;

const controllerLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!validateData(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await loginService.serviceLogin({ email });

    if (!user || user.password !== password) {
      console.log(user);
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const jwtConfig = { expiresIn: '3d', algorithm: 'HS256' };
    const token = jwt.sign({ email }, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = { controllerLogin };