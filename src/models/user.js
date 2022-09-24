const { use } = require('frisby');

const createUser = (sequelize, DataType) => {
  const User = sequelize.define('user', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    },
    displayName: DataType.STRING,
    email: DataType.STRING,
    password: DataType.STRING,
    image: DataType.STRING
  },
    {
      timestamps: false,
      tableName: 'users'
    }
  );
  return user;
}