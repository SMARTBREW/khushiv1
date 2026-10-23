const mysql = require('mysql2/promise');

const config = require('../config/config');
const logger = require('../config/logger');

const pool = mysql.createPool({
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  waitForConnections: true,
  connectionLimit: 10,
});

const ensureSchema = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(80) NOT NULL,
      email VARCHAR(120) NOT NULL,
      subject VARCHAR(120) NOT NULL,
      message VARCHAR(2000) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    )
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      email VARCHAR(100) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      unsubscribed_at TIMESTAMP NULL DEFAULT NULL,
      PRIMARY KEY (id),
      UNIQUE KEY newsletter_subscribers_email (email)
    )
  `);
};

const connect = async () => {
  await pool.query('SELECT 1');
  await ensureSchema();
  logger.info('Connected to MySQL');
};

const close = async () => {
  await pool.end();
};

module.exports = {
  pool,
  connect,
  close,
};
