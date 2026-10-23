const Joi = require('@hapi/joi');

const create = {
  body: Joi.object().keys({
    name: Joi.string().trim().min(1).max(80).required(),
    email: Joi.string().trim().email().max(120).required(),
    subject: Joi.string().trim().min(1).max(120).required(),
    message: Joi.string().trim().min(1).max(2000).required(),
  }),
};

module.exports = {
  create,
};
