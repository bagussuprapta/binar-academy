"use strict";

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
    await queryInterface.bulkInsert("Cars", [
      {
        plate: "WXB-3984",
        manufacture: "BMW",
        model: "X5",
        image: "url",
        rentPerDay: 800000,
        capacity: 6,
        description:
          "Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips",
        transmision: "Automatic",
        available: false,
        type: "Convertible",
        year: "2019",
        options: [
          "Keyless Entry",
          "Power Windows",
          "MP3 (Single Disc)",
          "CD (Multi Disc)",
          "Navigation",
        ],
        specs: [
          "Rear passenger map pockets",
          "Electrochromic rearview mirror",
          "Dual chrome exhaust tips",
          "Locking glove box",
          "Pwr front vented disc/rear drum brakes",
        ],
        createdBy: "gusde",
        updatedBy: "gusde",
        availableAt: "2022-06-30T14:45:15",
        createdAt: "2022-06-28T06:45:15",
        updatedAt: "2022-06-28T06:45:15",
        availableAt: "2022-07-23T15:49:05.563Z",
      },
      {
        plate: "OSL-4224",
        manufacture: "Lincoln",
        model: "MKZ",
        image: "url",
        rentPerDay: 900000,
        capacity: 6,
        description:
          "Driver & front passenger map pockets. Direct-type tire pressure monitor system",
        transmision: "Automanual",
        available: true,
        type: "Sedan",
        year: 2021,
        options: [
          "Bucket Seats",
          "Airbag: Passenger",
          "Airbag: Driver",
          "Power Seats",
          "Airbag: Side",
          "Antilock Brakes",
          "CD (Multi Disc)",
        ],
        specs: [
          "Driver & front passenger map pockets",
          "Direct-type tire pressure monitor system",
          "Cargo area lamp",
          "Glove box lamp",
          "Silver finish interior door handles"
        ],
        createdBy: "gusde",
        updatedBy: "gusde",
        availableAt: "2022-06-30T14:45:15",
        createdAt: "2022-06-28T06:45:15",
        updatedAt: "2022-06-28T06:45:15",
        availableAt: "2022-10-22T15:49:05.563Z",
      },
      {
        plate: "VPT-9753",
        manufacture: "BMW",
        model: "M5",
        image: "url",
        rentPerDay: 900000,
        capacity: 6,
        description: '6.1L SRT V8 "Hemi" engine, elapsed time, maintenance & diagnostic messages',
        transmision: "Manual",
        available: true,
        type: "Hatchback",
        year: 2018,
        options: [
          "Alloy Wheels",
          "Power Locks",
          "A/C: Rear",
          "MP3 (Single Disc)",
          "Airbag: Driver",
          "A/C: Front",
          "Tinted Glass",
          "Alloy Wheels",
          "Alarm",
        ],
        specs: [
          '6.1L SRT V8 "Hemi" engine',
          "Electronic throttle control system w/intelligence (ETCS-i)",
          "Pwr tilt/slide moonroof -inc: 1-touch open/close",
          "Acoustic glass windshield",
        ],
        createdBy: "gusde",
        updatedBy: "gusde",
        availableAt: "2022-06-30T14:45:15",
        createdAt: "2022-06-28T06:45:15",
        updatedAt: "2022-06-28T06:45:15",
        availableAt: "2022-11-11T15:49:05.563Z",
      },
      {
        plate: "BHD-3923",
        manufacture: "Lincoln",
        model: "Navigator",
        image: "url",
        rentPerDay: 200000,
        capacity: 2,
        description:
          "Body color sill extension. Torsion beam rear suspension w/stabilizer bar. Front & rear passenger",
        transmision: "Automatic",
        available: false,
        type: "Minivan",
        year: 2020,
        options: [
          "CD (Multi Disc)",
          "Cruise Control",
          "Power Locks",
          "Alloy Wheels",
          "Tow Package",
        ],
        specs: [
          "Body color sill extension",
          "Torsion beam rear suspension w/stabilizer bar",
          "Front & rear passenger folding assist grips",
          "Electronic control braking (ECB)",
          "Black windshield molding",
        ],
        createdBy: "gusde",
        updatedBy: "gusde",
        availableAt: "2022-06-30T14:45:15",
        createdAt: "2022-06-28T06:45:15",
        updatedAt: "2022-06-28T06:45:15",
        availableAt: "2022-12-15T15:49:05.563Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

