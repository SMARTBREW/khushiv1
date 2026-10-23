const { pool } = require('./pool');

const subscribe = async ({ email }) => {
  const [result] = await pool.execute(
    `INSERT INTO newsletter_subscribers (email)
     VALUES (?)
     ON DUPLICATE KEY UPDATE unsubscribed_at = NULL`,
    [email]
  );
  return { id: result.insertId };
};

const transform = (record) => ({
  id: record.id,
});

module.exports = {
  subscribe,
  transform,
};
