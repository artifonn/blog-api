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
      tablename: 'categories',
    });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory,
      { foreignkey: 'categoryId', as: 'posts_categories' });
  };

  return Category;
}