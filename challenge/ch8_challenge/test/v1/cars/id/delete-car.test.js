const request = require('supertest');
const bcrypt = require('bcryptjs');
const app = require('../../../../app');
const { User, Car } = require('../../../../app/models');

describe('GET /v1/cars/:id', () => {
  const carData = {
    name: 'Ferrari',
    price: 356423,
    size: 'SMALL',
    image: 'url',
    isCurrentlyRented: false,
  };

  let idCars = 0;

  const password = 'Hati-hati-dijalan';
  const userAdmin = {
    name: 'Admin Delete Test',
    email: 'admindelete@mail.com',
    encryptedPassword: bcrypt.hashSync(password, 10),
    roleId: 2,
  };

  const userCustomer = {
    name: 'Customer Delete Test',
    email: 'customerdelete@mail.com',
    encryptedPassword: bcrypt.hashSync(password, 10),
    roleId: 1,
  };

  beforeEach(async () => {
    await User.create(userAdmin);
    await User.create(userCustomer);
    const addCar = await Car.create(carData);
    idCars = addCar.id;
  });

  afterEach(async () => {
    try {
      await User.destroy({
        where: {
          email: userAdmin.email,
        },
      });
      await User.destroy({
        where: {
          email: userCustomer.email,
        },
      });
    } catch (err) {
      console.error(err.message);
    }
  });

  it('should response with 401 as status code (userCustomer cannot be delete car)', async () =>
    request(app)
      .post('/v1/auth/login')
      .set('Content-Type', 'application/json')
      .send({ email: userCustomer.email, password })
      .then((res) => {
        request(app)
          .delete(`/v1/cars/${idCars}`)
          .set('authorization', `Bearer ${res.body.accessToken}`)
          .then((deleteCar) => {
            expect(deleteCar.statusCode).toBe(401);
            expect(deleteCar.body).toEqual({
              error: {
                name: 'Error',
                message: 'Access forbidden!',
                details: {
                  role: 'CUSTOMER',
                  reason: 'CUSTOMER is not allowed to perform this operation.',
                },
              },
            });
          });
      }));

  it('should response with 200 as status code sukses delete cars by admin', async () =>
    request(app)
      .post('/v1/auth/login')
      .set('Content-Type', 'application/json')
      .send({ email: userAdmin.email, password })
      .then((res) => {
        request(app)
          .delete(`/v1/cars/${idCars}`)
          .set('authorization', `Bearer ${res.body.accessToken}`)
          .then((res2) => {
            expect(res2.statusCode).toBe(200);
            expect(res2.body.message).toEqual(`sukses hapus mama`);
          });
      }));
});
