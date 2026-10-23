const Joi = require('@hapi/joi');

const subscribe = {
  body: Joi.object().keys({
    email: Joi.string().trim().email().max(100).required(),
  }),
};

module.exports = {
  subscribe,
};
