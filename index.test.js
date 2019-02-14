/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const { EVENTS } = require('./index');

test('EVENTS', () => {
  expect(EVENTS.PRODUCT_CREATED).toBe('product_created');
});
