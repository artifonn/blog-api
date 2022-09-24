'use strict';

const Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true
      },
      published: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
        type: Sequelize.DATE
      },
      updated: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
