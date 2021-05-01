const request = require('supertest');
const app = require('../app.js');

describe('app js test', function() {
    describe('GET /', function() {
       it('should respond to GET with hello world message', function (done) {
          request(app) 
            .get('/')
            .expect(200, 'Hello World!', done);
        });
    });
});