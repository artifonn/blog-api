const { User } = require('../models');

const serviceLogin = async ({ email }) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

module.exports = { serviceLogin };