const { use } = require('frisby');

module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
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
      underscored: true,
      tableName: 'users'
    }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      {
        foreignKey: 'userId', as: 'user'
      }
    );
  };

  return User;
}
