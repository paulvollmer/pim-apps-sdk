/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const EVENTS = {
  ATTRIBUTE_CREATED: 'attribute_created',
  ATTRIBUTE_UPDATED: 'attribute_updated',
  ATTRIBUTE_DELETED: 'attribute_deleted',
  CATALOG_CREATED: 'catalog_created',
  CATALOG_UPDATED: 'catalog_updated',
  CATALOG_DELETED: 'catalog_deleted',
  FAMILY_CREATED: 'family_created',
  FAMILY_UPDATED: 'family_updated',
  FAMILY_DELETED: 'family_deleted',
  PING: 'ping',
  PRODUCT_CREATED: 'product_created',
  PRODUCT_UPDATED: 'product_updated',
  PRODUCT_DELETED: 'product_deleted',
  USER_CREATED: 'user_created',
  USER_UPDATED: 'user_updated',
  USER_DELETED: 'user_deleted',
};

module.exports = EVENTS;
