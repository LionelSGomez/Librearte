'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin_1',
        email: 'prueba1@gmail.com',
        password: '12345678',
        avatar: "Default",
        roles_id: 1
      },
      {
        name: 'Admin_2',
        email: 'prueba2@gmail.com',
        password: '12345678',
        avatar: "Default",
        roles_id: 1
      },
      {
        name: 'User_1',
        email: 'prueba3@gmail.com',
        password: '12345678',
        avatar: "Default",
        roles_id: 2
      },
      {
        name: 'User_2',
        email: 'prueba4@gmail.com',
        password: '12345678',
        avatar: "Default",
        roles_id: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
