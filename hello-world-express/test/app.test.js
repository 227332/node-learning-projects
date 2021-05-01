const request = require('supertest');
const server = require('../app.js');

describe('app js test', function () {
  describe('GET /', function () {
    it('should respond to GET with hello world message', function (done) {
      request(server)
        .get('/')
        .expect(200, 'Hello World!', done);
    });

    after(function () {
      server.close();
    });
  });
});