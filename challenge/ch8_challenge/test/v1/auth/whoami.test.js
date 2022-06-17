const request = require('supertest');
const bcrypt = require('bcryptjs');
const app = require('../../../app');
const { User } = require('../../../app/models');

const password = '123';

const userAdmin = {
  name: 'admin',
  email: 'admin@test.com',
  encryptedPassword: bcrypt.hashSync(password, 10),
  roleId: 2,
};
const userCustomer = {
  name: 'customer',
  email: 'customer@test.com',
  encryptedPassword: bcrypt.hashSync(password, 10),
  roleId: 1,
};

describe('GET /v1/auth/whoami', () => {
  beforeAll(async () => {
    try {
      await User.create(userAdmin);
      await User.create(userCustomer);
    } catch (err) {
      console.error(err.message);
    }
  });

  afterAll(async () => {
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

  describe('GET should response with 401 as status code', () => {
    let tokenWhoAmIAdmin;
    beforeEach(async () => {
      await request(app)
        .post('/v1/auth/login')
        .set('Content-Type', 'application/json')
        .send({ email: userAdmin.email, password: password })
        .then((AdminWhoAmILogin) => {
          tokenWhoAmIAdmin = AdminWhoAmILogin.body.accessToken;
        });
    });
    
    it('Admin cannot be get who Am I', async () => {
      return await request(app)
        .get('/v1/auth/whoami')
        .set('authorization', 'Bearer ' + tokenWhoAmIAdmin)
        .then((adminResWhoAmI) => {
          expect(adminResWhoAmI.statusCode).toBe(401);
          expect(adminResWhoAmI.body).toEqual({
            error: {
              name: 'Error',
              message: 'Access forbidden!',
              details: {
                role: 'ADMIN',
                reason: 'ADMIN is not allowed to perform this operation.',
              },
            },
          });
        });
    });
  });

  describe('GET should respond with 200 as status code', () => {
    let tokenWhoAmICustomer;
    beforeEach(async () => {
      await request(app)
        .post('/v1/auth/login')
        .set('Content-Type', 'application/json')
        .send({ email: userCustomer.email, password: password })
        .then((CustomerWhoAmILogin) => {
          tokenWhoAmICustomer = CustomerWhoAmILogin.body.accessToken;
        });
    });

    it('Customer access to GET Who Am I', async () => {
      return await request(app)
        .get('/v1/auth/whoami')
        .set('authorization', 'Bearer ' + tokenWhoAmICustomer)
        .then((customerResWhoAmI) => {
          expect(customerResWhoAmI.statusCode).toBe(200);
          expect(customerResWhoAmI.body.name).toEqual(userCustomer.name);
          expect(customerResWhoAmI.body.email).toEqual(
            userCustomer.email.toLowerCase()
          );
        });
    });
  });
});
