'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cars', [
      {
        make: 'Honda',
        model: 'Civic Type R',
        year: 2020,
        imageURL: 'https://i.imgur.com/Myv4IZM.jpg',
        bodyStyle:'Coupe',
        driverId: 1 
      },
      {
        make: 'Lamborghini',
        model: 'Huracan',
        year: 2020,
        imageURL: 'https://i.imgur.com/VIwGPnR.jpg',
        bodyStyle:'Coupe',
        driverId: 2 
      },
      {
        make: 'McLaren',
        model: '720',
        year: 2020,
        imageURL: 'https://i.imgur.com/RxGEcXT.jpg',
        bodyStyle:'Coupe',
        driverId: 3
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cars', null, {});
  }
};
