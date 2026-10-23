const httpStatus = require('http-status');

const catchAsync = require('../utils/catchAsync');
const { ContactMessage } = require('../models');
const { emailService } = require('../services');
const logger = require('../config/logger');

const createContact = catchAsync(async (req, res) => {
  const record = await ContactMessage.create(req.body);
  try {
    await emailService.sendContactMessage(req.body);
  } catch (error) {
    logger.error(`Contact ${record.id} was saved, but the email was not sent`);
  }
  res.status(httpStatus.CREATED).send(ContactMessage.transform(record));
});

module.exports = {
  createContact,
};
