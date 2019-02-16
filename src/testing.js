/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const signature = require('./signature');

const mockHeaders = (event, secret, payload) => ({
  'Content-Type': 'application/json',
  'User-Agent': 'PIM-Hookshot',
  'X-PIM-Event': event,
  'X-PIM-Delivery': 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
  'X-PIM-Signature': signature.sign(secret, payload),
});

module.exports = { mockHeaders };
