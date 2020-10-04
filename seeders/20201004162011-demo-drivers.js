'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Drivers",[
      {
        name: 'Paul Walker',
        username: 'PWalker',
        password: '2f2f',
        age: 40,
        gender: 'Male',
        drivingExperience: 5
      },
      {
        name: 'Vin Diesel',
        username: 'VDiesel',
        password: 'xxx',
        age: 53,
        gender: 'Male',
        drivingExperience: 5
      },
      {
        name: 'James Deane',
        username: 'JamesD',
        password: 'DK',
        age: 28,
        gender: 'Male',
        drivingExperience: 5
      },
    ],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Drivers', null, {});
  }
};
