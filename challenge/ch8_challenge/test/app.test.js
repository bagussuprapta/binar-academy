const request = require('supertest');
const app = require('../app');

describe('GET /', () => {

  it('should response with 200 as status code (Application Start)', async () => {
    return request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).toBe(200); // check toBe 200 status response sukses
        expect(res.body.status).toEqual('OK');
        expect(res.body.message).toEqual('BCR API is up and running!');
      });
  });

  it('should response with 404 as status code (Application Not found)', async () => {
    return request(app)
      .get('/wrong-end-point')
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({
          error: {
            name: 'Error',
            message: 'Not found!',
            details: { method: 'GET', url: '/wrong-end-point' },
          },
        });
      });
  });
});
