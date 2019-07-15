/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const { EVENTS, signature, middleware, testing } = require('./index');

describe('Test index', () => {
  test('EVENTS', () => {
    expect(typeof EVENTS).toBe('object');
  });

  test('signature sign', () => {
    expect(typeof signature.sign).toBe('function');
  });
  test('signature verify', () => {
    expect(typeof signature.verify).toBe('function');
  });

  test('middleware', () => {
    expect(typeof middleware).toBe('function');
  });

  test('testing mockHeaders', () => {
    expect(typeof testing.mockHeaders).toBe('function');
  });
});
