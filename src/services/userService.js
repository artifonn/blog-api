const { User } = require('../models');

const serviceUser = async ({ email, password, displayName, image }) => {
  const user = await User.create({ email, password, displayName, image });
  return user;
};

const getUserController = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });
  return user;
};

module.exports = { serviceUser, getUserController };