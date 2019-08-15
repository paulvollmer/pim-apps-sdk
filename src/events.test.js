/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const EVENTS = require('./events');

describe('Test events', () => {
  test('EVENTS', () => {
    expect(EVENTS.APP_CREATED).toBe('app_created');
    expect(EVENTS.APP_UPDATED).toBe('app_updated');
    expect(EVENTS.APP_DELETED).toBe('app_deleted');

    expect(EVENTS.ATTRIBUTE_UPDATED).toBe('attribute_updated');
    expect(EVENTS.ATTRIBUTE_DELETED).toBe('attribute_deleted');

    expect(EVENTS.ATTRIBUTEGROUP_CREATED).toBe('attributegroup_created');
    expect(EVENTS.ATTRIBUTEGROUP_UPDATED).toBe('attributegroup_updated');
    expect(EVENTS.ATTRIBUTEGROUP_DELETED).toBe('attributegroup_deleted');

    expect(EVENTS.CATALOG_CREATED).toBe('catalog_created');
    expect(EVENTS.CATALOG_UPDATED).toBe('catalog_updated');
    expect(EVENTS.CATALOG_DELETED).toBe('catalog_deleted');
    expect(EVENTS.CATALOG_PRODUCTS_CREATED).toBe('catalog_products_created');
    expect(EVENTS.CATALOG_PRODUCTS_DELETED).toBe('catalog_products_deleted');

    expect(EVENTS.FAMILY_CREATED).toBe('family_created');
    expect(EVENTS.FAMILY_UPDATED).toBe('family_updated');
    expect(EVENTS.FAMILY_DELETED).toBe('family_deleted');
    expect(EVENTS.FAMILY_ATTRIBUTEGROUPS_UPDATED).toBe('family_attributegroups_updated');

    expect(EVENTS.KEYWORD_CREATED).toBe('keyword_created');
    expect(EVENTS.KEYWORD_UPDATED).toBe('keyword_updated');
    expect(EVENTS.KEYWORD_DELETED).toBe('keyword_deleted');

    expect(EVENTS.PRODUCT_CREATED).toBe('product_created');
    expect(EVENTS.PRODUCT_UPDATED).toBe('product_updated');
    expect(EVENTS.PRODUCT_DELETED).toBe('product_deleted');
    expect(EVENTS.PRODUCT_FAMILY_UPDATED).toBe('product_family_updated');

    expect(EVENTS.SETTINGS_UPDATED).toBe('settings_updated');

    expect(EVENTS.TRANSLATION_UPDATED).toBe('translation_updated');
    expect(EVENTS.TRANSLATION_DELETED).toBe('translation_deleted');

    expect(EVENTS.USER_CREATED).toBe('user_created');
    expect(EVENTS.USER_UPDATED).toBe('user_updated');
    expect(EVENTS.USER_DELETED).toBe('user_deleted');
  });
});
