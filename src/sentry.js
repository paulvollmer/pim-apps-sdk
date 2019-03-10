/*
 * Copyright 2019 myles.systems - All rights reserved.
 */

const Sentry = require('@sentry/node');

Sentry.init({ dsn: process.env.SENTRY_DSN });
