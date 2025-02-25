import sendgrid from '@sendgrid/mail';

// Set SendGrid API key from environment variable
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res
      .status(405)
      .json({ success: false, message: `Method ${req.method} not allowed.` });
  }

  const { name, email, message } = req.body;

  // Validate request body
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide name, email, and message.',
    });
  }

  // Debugging logs for environment variables (useful during development)
  console.log("SENDGRID_API_KEY Loaded:", !!process.env.SENDGRID_API_KEY);
  console.log("EMAIL Loaded:", !!process.env.EMAIL);

  // Validate environment variables
  if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL) {
    console.error('Missing required environment variables.');
    return res.status(500).json({
      success: false,
      message: 'Internal server error: Environment variables not configured.',
    });
  }

  // Define email options
  const mailOptions = {
    to: process.env.EMAIL, // Your business email address
    from: 'no-reply@zss.ca', // Verified domain email address in SendGrid
    replyTo: email, // Visitor's email address for replies
    subject: `New message from ${name}`,
    html: `
      <html>
      <body>
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </body>
      </html>
    `,
  };

  try {
    // Send email using SendGrid
    await sendgrid.send(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error.message);
    return res
      .status(500)
      .json({ success: false, message: 'Failed to send email. Please try again later.' });
  }
}
