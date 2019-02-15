/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const crypto = require('crypto');

const sign = (secret, data) => {
  const payload = JSON.stringify(data);
  const sha = crypto
    .createHmac('sha1', secret)
    .update(payload)
    .digest('hex');
  return `sha1=${sha}`;
};

const verify = (secret, signature, data) => {
  if (signature === sign(secret, data)) {
    return true;
  }
  return false;
};

module.exports = {
  sign,
  verify,
};
