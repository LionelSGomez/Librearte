'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_categories', [
      {
        name: 'Mochilas',
      },
      {
        name: 'Cuadernos',
      },
      {
        name: 'Cartucheras',
      },
      {
        name: 'Lapices',
      },
      {
        name: 'Lapiceras',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_categories', null, {});
  }
};

