module.exports = (sequelize, DataType) => {
  const Category = sequelize.define('Category', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    },
    name: DataType.STRING,
  },
    {
      timestamps: false,
      underscored: true,
    }
  );

  return Category;
}