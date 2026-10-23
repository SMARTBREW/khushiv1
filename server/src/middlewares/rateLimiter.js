const rateLimit = require('express-rate-limit');

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { code: 429, message: 'Too many requests. Please try again later.' },
});

module.exports = {
  formLimiter,
};
