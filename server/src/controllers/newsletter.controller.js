const httpStatus = require('http-status');

const catchAsync = require('../utils/catchAsync');
const { NewsletterSubscriber } = require('../models');

const subscribe = catchAsync(async (req, res) => {
  const record = await NewsletterSubscriber.subscribe(req.body);
  res.status(httpStatus.CREATED).send(NewsletterSubscriber.transform(record));
});

module.exports = {
  subscribe,
};
