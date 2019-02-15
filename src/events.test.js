/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const EVENTS = require('./events');

test('EVENTS', () => {
  expect(EVENTS.PING).toBe('ping');
  expect(EVENTS.PRODUCT_CREATED).toBe('product_created');
  expect(EVENTS.PRODUCT_UPDATED).toBe('product_updated');
  expect(EVENTS.PRODUCT_DELETED).toBe('product_deleted');
  expect(EVENTS.FAMILY_CREATED).toBe('family_created');
  expect(EVENTS.FAMILY_UPDATED).toBe('family_updated');
  expect(EVENTS.FAMILY_DELETED).toBe('family_deleted');
  expect(EVENTS.CATALOG_CREATED).toBe('catalog_created');
  expect(EVENTS.CATALOG_UPDATED).toBe('catalog_updated');
  expect(EVENTS.CATALOG_DELETED).toBe('catalog_deleted');
});
