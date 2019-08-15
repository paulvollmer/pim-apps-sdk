/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const EVENTS = {
  APP_CREATED: 'app_created',
  APP_UPDATED: 'app_updated',
  APP_DELETED: 'app_deleted',

  ATTRIBUTE_UPDATED: 'attribute_updated',
  ATTRIBUTE_DELETED: 'attribute_deleted',

  ATTRIBUTEGROUP_CREATED: 'attributegroup_created',
  ATTRIBUTEGROUP_UPDATED: 'attributegroup_updated',
  ATTRIBUTEGROUP_DELETED: 'attributegroup_deleted',

  CATALOG_CREATED: 'catalog_created',
  CATALOG_UPDATED: 'catalog_updated',
  CATALOG_DELETED: 'catalog_deleted',
  CATALOG_PRODUCTS_CREATED: 'catalog_products_created',
  CATALOG_PRODUCTS_DELETED: 'catalog_products_deleted',

  FAMILY_CREATED: 'family_created',
  FAMILY_UPDATED: 'family_updated',
  FAMILY_DELETED: 'family_deleted',
  FAMILY_ATTRIBUTEGROUPS_UPDATED: 'family_attributegroups_updated',

  KEYWORD_CREATED: 'keyword_created',
  KEYWORD_UPDATED: 'keyword_updated',
  KEYWORD_DELETED: 'keyword_deleted',

  PRODUCT_CREATED: 'product_created',
  PRODUCT_UPDATED: 'product_updated',
  PRODUCT_DELETED: 'product_deleted',
  PRODUCT_FAMILY_UPDATED: 'product_family_updated',

  SETTINGS_UPDATED: 'settings_updated',

  TRANSLATION_UPDATED: 'translation_updated',
  TRANSLATION_DELETED: 'translation_deleted',

  USER_CREATED: 'user_created',
  USER_UPDATED: 'user_updated',
  USER_DELETED: 'user_deleted',
};

module.exports = EVENTS;
