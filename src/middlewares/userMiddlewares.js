const { User } = require('../models');

const validateNamePass = async (req, res, next) => {
  const { email, displayName, password } = req.body;
  const regexTest = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const validEmail = regexTest.test(email);

  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (!validEmail) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400)
      .json({
        message: '"password" length must be at least 6 characters long',
      });
  }

  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const emailPresent = await User.findOne({ where: { email } });

  if (emailPresent) {
    return res.status(409)
      .json({ message: 'User already registered' });
  }
  next();
};

module.exports = { validateEmail, validateNamePass };