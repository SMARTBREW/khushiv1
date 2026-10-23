const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const renderContactMessage = ({ name, email, subject, message }) => ({
  subject,
  text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
});

module.exports = {
  renderContactMessage,
};
