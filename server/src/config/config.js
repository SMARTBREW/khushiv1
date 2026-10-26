const path = require('path');

const dotenv = require('dotenv');
const Joi = require('@hapi/joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').default('development'),
    PORT: Joi.number().default(4000),
    CORS_ORIGIN: Joi.string().required().description('Allowed browser origins, separated by commas'),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().default(3306),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().allow('').default(''),
    DB_NAME: Joi.string().required(),
    SMTP_HOST: Joi.string().allow('').default(''),
    SMTP_PORT: Joi.number().default(587),
    SMTP_USERNAME: Joi.string().allow('').default(''),
    SMTP_PASSWORD: Joi.string().allow('').default(''),
    EMAIL_FROM: Joi.string().allow('').default(''),
    CONTACT_TO_EMAIL: Joi.string().email().default('contact@khushii.org'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  corsOrigin: envVars.CORS_ORIGIN.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  mysql: {
    host: envVars.DB_HOST,
    port: envVars.DB_PORT,
    user: envVars.DB_USER,
    password: envVars.DB_PASSWORD,
    database: envVars.NODE_ENV === 'test' ? `${envVars.DB_NAME}-test` : envVars.DB_NAME,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
    contactTo: envVars.CONTACT_TO_EMAIL,
  },
};
