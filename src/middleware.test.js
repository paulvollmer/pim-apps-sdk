/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const request = require('supertest');
const express = require('express');
const { mockHeaders } = require('./testing');
const middleware = require('./middleware');

describe('Test middleware', () => {
  const app = express();
  app.use(express.json());
  app.use(middleware('test-secret'));
  app.post('/webhook', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  const payload = {
    hello: 'world',
  };

  test('Endpoint /health should response with statuscode 200', (done) => {
    request(app)
      .get('/health')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: 'ok' });
        done();
      });
  });

  test('It should response with statuscode 200', (done) => {
    request(app)
      .post('/webhook')
      .send(payload)
      .set(mockHeaders('testevent', 'test-secret', payload))
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: 'ok' });
        done();
      });
  });

  test('It should response with statuscode 401', (done) => {
    request(app)
      .post('/webhook')
      .send(payload)
      .set(mockHeaders('testevent', 'wrong-secret', payload))
      .then((response) => {
        expect(response.statusCode).toBe(401);
        expect(response.body).toEqual('');
        done();
      });
  });

  test('It should response with statuscode 401 (headers not valid)', (done) => {
    request(app)
      .post('/webhook')
      .send(payload)
      .set([{ 'user-agent': 'wrong-agent' }])
      .then((response) => {
        expect(response.statusCode).toBe(401);
        expect(response.body).toEqual('');
        done();
      });
  });

  test('It should response with statuscode 404', (done) => {
    request(app)
      .post('/wrong-route')
      .send(payload)
      .set(mockHeaders('testevent', 'test-secret', payload))
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({});
        done();
      });
  });
});
