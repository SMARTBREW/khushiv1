const express = require('express');

const validate = require('../../middlewares/validate');
const { formLimiter } = require('../../middlewares/rateLimiter');
const newsletterValidation = require('../../validations/newsletter.validation');
const newsletterController = require('../../controllers/newsletter.controller');

const router = express.Router();

router.post('/', formLimiter, validate(newsletterValidation.subscribe), newsletterController.subscribe);

module.exports = router;
