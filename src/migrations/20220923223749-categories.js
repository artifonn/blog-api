'use strict';

const Sequelize = require('sequelize');

module.exports = {
  /**
   *
   * @param {import(Sequelize)} queryInterface
   * @param {import(Sequelize)} Sequelize
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });

  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
