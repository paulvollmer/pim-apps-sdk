/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const { verify } = require('./signature');

const middleware = secret => (req, res, next) => {
  if (
    req.headers['user-agent'] === 'PIM-Hookshot' &&
    req.headers['x-pim-delivery'] !== '' &&
    req.headers['x-pim-signature'] !== ''
  ) {
    if (verify(secret, req.headers['x-pim-signature'], req.body)) {
      next();
    }
  }
  res.status(401).json('');
};

module.exports = middleware;
