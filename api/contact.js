const nodemailer = require("nodemailer");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strips characters that could be used for SMTP header injection when a
// field value ends up in a header (e.g. the display name in "From").
const cleanHeaderValue = (s) => String(s || "").replace(/[\r\n]+/g, " ").trim();

const esc = (s) =>
  String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const name = cleanHeaderValue(body.name).slice(0, 200);
  const company = cleanHeaderValue(body.company).slice(0, 200);
  const email = cleanHeaderValue(body.email).slice(0, 200);
  const phone = cleanHeaderValue(body.phone).slice(0, 60);
  const location = cleanHeaderValue(body.location).slice(0, 120);
  const message = String(body.message || "").slice(0, 5000);

  // Honeypot: a hidden field real users never fill in. Bots that fill every
  // field trip it — accept silently so they don't learn it's a trap.
  if (body.website) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !email || !EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, error: "invalid_fields" });
    return;
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error("contact form: missing SMTP configuration");
    res.status(500).json({ ok: false, error: "server_not_configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: SMTP_SECURE !== "false",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows = [
    ["Име и презиме / Name", name],
    ["Компанија / Company", company],
    ["Email", email],
    ["Телефон / Phone", phone],
    ["Локација / Location", location],
  ].filter(([, v]) => v);

  const html =
    "<h2>Ново барање од контакт формата / New inquiry from the contact form</h2>" +
    "<table cellpadding=\"6\" cellspacing=\"0\">" +
    rows.map(([label, value]) => `<tr><td><strong>${esc(label)}</strong></td><td>${esc(value)}</td></tr>`).join("") +
    "</table>" +
    (message ? `<p><strong>Порака / Message:</strong></p><p>${esc(message).replace(/\n/g, "<br>")}</p>` : "");

  const text =
    rows.map(([label, value]) => `${label}: ${value}`).join("\n") +
    (message ? `\n\nMessage:\n${message}` : "");

  try {
    await transporter.sendMail({
      from: `"Lightbox Media — Website" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: `"${name}" <${email}>`,
      subject: `Ново барање од сајтот — ${name}`,
      text,
      html,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact form send failed:", err);
    res.status(500).json({ ok: false, error: "send_failed" });
  }
};
