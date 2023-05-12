'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_images', [
      {
        name: 'Administrador',
      },
      {
        name: 'Usuario',
      },
      {
        name: 'Invitado',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_images', null, {});
  }
};
