'use strict';
import * as Random from '../../common/utils/Random';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: any, Sequelize: any) {
    await queryInterface.bulkInsert('Employees', [
      await Random.randomEmployee(),
      await Random.randomEmployee(),
      await Random.randomEmployee(),
      await Random.randomEmployee(),
      await Random.randomEmployee(),
      await Random.randomEmployee(),
  ], {});
  },

  async down (queryInterface: any, Sequelize: any) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
