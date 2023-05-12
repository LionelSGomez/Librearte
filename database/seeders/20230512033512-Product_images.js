'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_images', [
      {
        name: './images/products/mochila-unicornio',
        products_id: 1,
      },
      {
        name: './images/products/mochila-videojuego',
        products_id: 2,
      },
      {
        name: './images/products/cartuchera-unicornio',
        products_id: 3,
      },
      {
        name: './images/products/color-filgo-x6',
        products_id: 4,
      },
      {
        name: './images/products/color-filgo-x12',
        products_id: 5,
      },
      {
        name: './images/products/lapiz-negro-x4',
        products_id: 6,
      },
      {
        name: './images/products/lapiz-negro-x12',
        products_id: 7,
      },
      {
        name: './images/products/lapicera-dino',
        products_id: 8,
      },
      {
        name: './images/products/lapicera-azul',
        products_id: 9,
      },
      {
        name: './images/products/lapicera-borrable',
        products_id: 10,
      },
      {
        name: './images/products/cuaderno-a4-simple',
        products_id: 11,
      },
      {
        name: './images/products/cuaderno-a4-anillado',
        products_id: 12,
      },
      {
        name: './images/products/faber-x12',
        products_id: 13,
      },
      {
        name: './images/products/faber-x15',
        products_id: 14,
      },
      {
        name: './images/products/cartuchera-videojuego',
        products_id: 15,
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_images', null, {});
  }
};
