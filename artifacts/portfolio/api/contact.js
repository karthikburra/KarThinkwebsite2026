export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    let nodemailer;
    try {
      nodemailer = (await import('nodemailer')).default || await import('nodemailer');
    } catch (e) {
      return res.status(500).json({ error: "Failed to load mailer module", details: String(e) });
    }

    const { name, email, message } = req.body || {};

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ error: "Name is required" });
    }
    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }
    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({ error: "Message is required" });
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;

    if (!user || !pass) {
      return res.status(500).json({ error: "Email configuration error. Please check Vercel environment variables." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'dcarchitects.info@gmail.com',
      subject: `Project Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    return res.status(500).json({ error: "Unexpected server error", details: String(error) });
  }
}
