'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // logic for transforming into the new state
    return queryInterface.addColumn('Products',
      'image', Sequelize.TEXT
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // logic for reverting the changes
    return queryInterface.removeColumn('Products',
      'image'
    );
  }
};
