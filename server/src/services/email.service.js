const nodemailer = require('nodemailer');

const config = require('../config/config');
const logger = require('../config/logger');
const { renderContactMessage } = require('../mail-templates/contact-message');

const transport = nodemailer.createTransport(config.email.smtp);

if (config.env !== 'test' && config.email.smtp.host) {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server'));
}

const sendContactMessage = async (contact) => {
  if (!config.email.smtp.host || !config.email.from) {
    logger.info('SMTP is not configured, so the contact email was not sent');
    return;
  }

  const rendered = renderContactMessage(contact);
  await transport.sendMail({
    from: config.email.from,
    to: config.email.contactTo,
    replyTo: contact.email,
    subject: rendered.subject,
    text: rendered.text,
    html: rendered.html,
  });
};

module.exports = {
  sendContactMessage,
};
