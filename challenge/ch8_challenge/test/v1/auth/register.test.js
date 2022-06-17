const request = require('supertest');
const app = require('../../../app');
const { User } = require('../../../app/models');

describe('POST /v1/auth/register', () => {
  const user = {
    name: 'gusde',
    email: 'gusde@test.com',
    password: '123'
  };

  describe('register user', () => {
    afterEach(async () => {
      await User.destroy({
        where: { email: user.email },
      });
    });
  
    it('should response with 201', async () => {
      await request(app)
        .post('/v1/auth/register')
        .set('Content-Type', 'application/json')
        .send(user)
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

  describe('register user already exsist', () => {
    beforeEach(async () => {
      await User.create(user);
    });

    afterEach(async () => {
      await User.destroy({
        where: { email: user.email },
      });
    });

    it('should response with 500', async () => {
      await request(app)
        .post('/v1/auth/register')
        .set('Content-Type', 'application/json')
        .send(user)
        .then((res) => {
          expect(res.statusCode).toBe(500);
          expect(res.body.error.message).toBe('EmailAlreadyTakenError is not defined');
        });
    });
  })
});
