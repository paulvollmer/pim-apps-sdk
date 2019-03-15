/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const { verify } = require('./signature');

const middleware = (secret = process.env.WEBHOOK_SECRET || '') => (req, res, next) => {
  // log the incoming request
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  process.stdout.write(
    `${req.method}\t${req.path}\tprotocol: ${req.protocol}\tip: ${ip} headers: ${JSON.stringify(
      req.headers,
    )}\tbody: ${JSON.stringify(req.body)}\n`,
  );

  // the /health endpoint is used for app health checks
  if (req.method === 'GET' && req.path === '/health') {
    res.status(200).json({ status: 'ok' });
    return false;
  }

  // check the headers and verify the request
  if (
    req.headers['user-agent'] === 'PIM-Hookshot' &&
    req.headers['x-pim-delivery'] !== '' &&
    req.headers['x-pim-signature'] !== ''
  ) {
    if (verify(secret, req.headers['x-pim-signature'], req.body)) {
      return next();
    }
  }
  res.status(401).json('');
  return false;
};

module.exports = middleware;
