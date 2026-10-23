const pool = require('./pool');

module.exports.pool = pool.pool;
module.exports.connect = pool.connect;
module.exports.close = pool.close;
module.exports.ContactMessage = require('./contact.model');
module.exports.NewsletterSubscriber = require('./newsletter.model');
