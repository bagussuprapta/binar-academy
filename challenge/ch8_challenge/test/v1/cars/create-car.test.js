const request = require('supertest');
const bcrypt = require('bcryptjs');
const app = require('../../../app');
const { User } = require('../../../app/models');

describe('GET /v1/cars', () => {
  const carData = {
    name: 'Lambo',
    price: 600000,
    size: 'SMALL',
    image: 'url',
    isCurrentlyRented: false,
  };
  const carDataInvalid = {
    name: 'Ferrari',
    price: 'seribu',
    size: 'SMALL',
    image: 'url',
    isCurrentlyRented: false,
  };

  const password = '123';

  const userAdmin = {
    name: 'Admin Create Cars Test',
    email: 'admincreatecars@mail.com',
    encryptedPassword: bcrypt.hashSync(password, 10),
    roleId: 2,
  };
  const userCustomer = {
    name: 'Customer Create Cars Test',
    email: 'customercreatecars@mail.com',
    encryptedPassword: bcrypt.hashSync(password, 10),
    roleId: 1,
  };

  beforeEach(async () => {
    try {
      await User.create(userAdmin);
      await User.create(userCustomer);
    } catch (err) {
      console.error(err.message);
    }
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

  it('should response with 401 as status code (userCustomer cannot be create car)', async () =>
    request(app)
      .post('/v1/auth/login')
      .set('Content-Type', 'application/json')
      .send({ email: userCustomer.email, password })
      .then((res) => {
        request(app)
          .post('/v1/cars')
          .set('authorization', `Bearer ${res.body.accessToken}`)
          .send(carData)
          .then((createCar) => {
            expect(createCar.statusCode).toBe(401);
            expect(createCar.body).toEqual({
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

  it('should response with 201 as status code sukses create cars by admin', async () =>
    request(app)
      .post('/v1/auth/login')
      .set('Content-Type', 'application/json')
      .send({ email: userAdmin.email, password })
      .then((res) => {
        request(app)
          .post('/v1/cars')
          .set('authorization', `Bearer ${res.body.accessToken}`)
          .send(carData)
          .then((res2) => {
            expect(res2.statusCode).toBe(201);
            expect(res2.body.name).toEqual(carData.name);
            expect(res2.body.price).toEqual(carData.price);
            expect(res2.body.size).toEqual(carData.size);
            expect(res2.body.image).toEqual(carData.image);
            expect(res2.body.isCurrentlyRented).toEqual(
              carData.isCurrentlyRented
            );
          });
      }));

  it('should response with 422 as status code price must be number', async () =>
    request(app)
      .post('/v1/auth/login')
      .set('Content-Type', 'application/json')
      .send({ email: userAdmin.email, password })
      .then((res) => {
        request(app)
          .post('/v1/cars')
          .set('authorization', `Bearer ${res.body.accessToken}`)
          .send(carDataInvalid)
          .then((res2) => {
            expect(res2.statusCode).toBe(422);
            expect(res2.body.error.message).toEqual('Price must be number!');
          });
      }));
});
