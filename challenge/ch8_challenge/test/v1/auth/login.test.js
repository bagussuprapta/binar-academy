const request = require('supertest');
const app = require('../../../app');
const { User } = require('../../../app/models');
const bcrypt = require('bcryptjs')

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
}

describe('POST /v1/auth/login', () => {
  const user = {
    name: 'gusde',
    email: 'gusde@test.com',
    encryptedPassword: encryptPassword('123'),
    roleId: 1
  };

  describe('login user', () => {
    beforeEach(async () => {
      await User.create(user);  
    });

    afterEach(async () => {
      await User.destroy({
        where: { email: user.email },
      });
    });
  
    it('should response with 201', async () => {
      await request(app)
        .post('/v1/auth/login')
        .set('Content-Type', 'application/json')
        .send({email: 'gusde@test.com', password: '123'})
        .then((res) => {
          expect(res.statusCode).toBe(201);
          expect(res.body).toEqual(
            expect.objectContaining({
              accessToken: expect.any(String),
            })
          );
        });
    });
  })

  describe('failed login user', () => {
    beforeEach(async () => {
      await User.create(user);  
    });

    afterEach(async () => {
      await User.destroy({
        where: { email: user.email },
      });
    });

    it('should response with 401', async () => {
      await request(app)
        .post('/v1/auth/login')
        .set('Content-Type', 'application/json')
        .send({email: 'gusde@test.com', password: '1234'})
        .then((res) => {
          expect(res.statusCode).toBe(401);
          expect(res.body.error.message).toBe('Password is not correct!');
        });
    });
  })
});