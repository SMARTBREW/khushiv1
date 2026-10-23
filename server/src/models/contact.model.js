const { pool } = require('./pool');

const create = async ({ name, email, subject, message }) => {
  const [result] = await pool.execute(
    'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
    [name, email, subject, message]
  );
  return { id: result.insertId };
};

const transform = (record) => ({
  id: record.id,
});

module.exports = {
  create,
  transform,
};
