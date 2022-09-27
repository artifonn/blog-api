
module.exports = (sequelize, DataType) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    },
    title: DataType.STRING,
    content: DataType.STRING,
    userId: DataType.INTEGER,
    published: DataType.DATE,
    updated: DataType.DATE,
  },
    {
      timestamps: false,
      underscored: true,
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      {
        foreignKey: 'userId', as: 'user'
      }
    );
  };

  return BlogPost;
}