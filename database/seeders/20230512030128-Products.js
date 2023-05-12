'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        title: 'Mochila Unicornio',
        price: '20.000',
        description: 'Mochila con dibujo de unicornio',
        img: './images/products/mochila-unicornio',
        products_categories_id: 1 
      },
      {
        title: 'Mochila Videojuegos',
        price: '20.000',
        description: 'Mochila con dibujo de joystick',
        img: './images/products/mochila-videojuego',
        products_categories_id: 1
      },
      {
        title: 'Cartuchera Unicornio',
        price: '8.000',
        description: 'Cartuchera con dibujo de unicornio',
        img: './images/products/cartuchera-unicornio',
        products_categories_id: 3
      },
      {
        title: 'Lapices de colores Filgo x6',
        price: '1000',
        description: '6 lapices de colores, marca Filgo',
        img: './images/products/color-filgo-x6',
        products_categories_id: 4
      },
      {
        title: 'Lapices de colores Filgo x12',
        price: '1800',
        description: '12 lapices de colores, marca Filgo',
        img: './images/products/color-filgo-x12',
        products_categories_id: 4
      },
      {
        title: 'Lápiz negro Filgo x4',
        price: '500',
        description: '4 lapices de color negro, marca Filgo',
        img: './images/products/lapiz-negro-x4',
        products_categories_id: 4
      },
      {
        title: 'Lápiz negro Filgo x12',
        price: '1100',
        description: '12 lapices de color negro, marca Filgo',
        img: './images/products/lapiz-negro-x12',
        products_categories_id: 4
      },
      {
        title: 'Lapicera con muñeco',
        price: '400',
        description: 'Lapicera con muñeco',
        img: './images/products/lapicera-dino',
        products_categories_id: 5
      },
      {
        title: 'Lapicera azul',
        price: '200',
        description: 'Lapicera de escribir color azul',
        img: './images/products/lapicera-azul',
        products_categories_id: 5
      },
      {
        title: 'Lapicera borrable',
        price: '400',
        description: 'Lapicera de escribir color azul, con goma para borrar tinta',
        img: './images/products/lapicera-borrable',
        products_categories_id: 5
      },
      {
        title: 'Cuaderno A4 simple',
        price: '1200',
        description: 'Cuaderno con hojas tamaño A4',
        img: './images/products/cuaderno-a4-simple',
        products_categories_id: 2
      },
      {
        title: 'Cuaderno A4 anillado',
        price: '1000',
        description: 'Cuaderno con hojas tamaño A4, anillado',
        img: './images/products/cuaderno-a4-anillado',
        products_categories_id: 2
      },
      {
        title: 'Lapices de colores Faber Castell x12',
        price: '1500',
        description: '12 lapices de colores, marca Faber Castell',
        img: './images/products/faber-x12',
        products_categories_id: 4
      },
      {
        title: 'Lapices de colores Faber Castell x15',
        price: '1800',
        description: '15 lapices de colores, marca Faber Castell',
        img: './images/products/faber-x15',
        products_categories_id: 4
      },
      {
        title: 'Cartuchera Videojuegos',
        price: '8000',
        description: 'Cartuchera con dibujo de joystick',
        img: './images/products/cartuchera-videojuego',
        products_categories_id: 3
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
