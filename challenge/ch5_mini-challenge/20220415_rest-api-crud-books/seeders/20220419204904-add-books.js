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
        await queryInterface.bulkInsert('Books', [{
            judul: 'books',
            penulis: 'imam',
            tahun: '2000',
            createdAt: new Date(),
            updatedAt: new Date(),
            foto: 'https://ik.imagekit.io/ghifariastaudi/barbie-dreamtopia-buku-cerita-mewarnai-dan-permainan-mattel.jpg_j8tazhVl1.jpg'
        }])

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Users', null, {})
    }
};