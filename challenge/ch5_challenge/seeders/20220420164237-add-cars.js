'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Cars', [{
                nama: 'avanze',
                harga: 400000,
                ukuran: 'large',
                foto: 'https://ik.imagekit.io/ghifariastaudi/car-example_524ykYT1E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650476159341.jpg',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                nama: 'toyota',
                harga: 300000,
                ukuran: 'medium',
                foto: 'https://ik.imagekit.io/ghifariastaudi/car-example_524ykYT1E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650476159341.jpg',
                createdAt: new Date(),
                updatedAt: new Date()

            }
        ])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Cars', null, {})
    }
};