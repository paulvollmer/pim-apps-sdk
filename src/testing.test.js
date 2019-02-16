/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const testing = require('./testing');

describe('Test testing', () => {
  test('mockHeaders', () => {
    const headers = testing.mockHeaders('testevent', 'testsecret', { hello: 'world' });
    expect(headers['Content-Type']).toBe('application/json');
    expect(headers['User-Agent']).toBe('PIM-Hookshot');
    expect(headers['X-PIM-Event']).toBe('testevent');
    expect(headers['X-PIM-Delivery']).toBe('aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee');
    expect(headers['X-PIM-Signature']).toBe('sha1=eb63f6e5ed2305dd466062a2e485ef2c53334ee8');
  });
});
