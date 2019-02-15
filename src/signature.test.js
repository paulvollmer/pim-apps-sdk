/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const { sign, verify } = require('./signature');

describe('Test signature verify', () => {
  test('It should return verify true', () => {
    const payload = { hello: 'world' };
    const secret = '123';
    const signature = sign(secret, payload);
    const result = verify(secret, signature, payload);
    expect(result).toBe(true);
  });

  test('It should return verify false', () => {
    const payload = { hello: 'world' };
    const secret = '123';
    const signature = sign(secret, payload);
    const result = verify('not the correct secret', signature, payload);
    expect(result).toBe(false);
  });
});
