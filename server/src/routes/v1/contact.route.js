const express = require('express');

const validate = require('../../middlewares/validate');
const { formLimiter } = require('../../middlewares/rateLimiter');
const contactValidation = require('../../validations/contact.validation');
const contactController = require('../../controllers/contact.controller');

const router = express.Router();

router.post('/', formLimiter, validate(contactValidation.create), contactController.createContact);

module.exports = router;
