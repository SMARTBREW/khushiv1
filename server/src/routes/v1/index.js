const express = require('express');

const contactRoute = require('./contact.route');
const newsletterRoute = require('./newsletter.route');

const router = express.Router();

router.use('/contact', contactRoute);
router.use('/newsletter', newsletterRoute);

module.exports = router;
