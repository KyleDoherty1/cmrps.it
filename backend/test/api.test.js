const request = require('supertest');

const app = require('../src/index');

describe('POST /api/v1/url', () => {
  it('responds with a 200 when valid url is passed', (done) => {
    request(app)
      .get('/api/v1/url')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('responds with a 400 when invalid url is passed', (done) => {
    request(app)
      .get('/api/v1/url')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, {
        message: 'url must be a valid URL'
      }, done);
  });
});
