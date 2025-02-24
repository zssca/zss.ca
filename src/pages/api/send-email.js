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
  if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL) {
    console.error('Missing required environment variables.');
  }

  console.log("SENDGRID_API_KEY Loaded:", !!process.env.SENDGRID_API_KEY);
  console.log("EMAIL Loaded:", !!process.env.EMAIL);

  // Define email options
  const mailOptions = {
    to: process.env.EMAIL, // Your business email address
    from: `no-reply@zss.ca`, // Verified domain email address in SendGrid
    replyTo: email, // Visitor's email address for replies
    subject: `New message from ${name}`,
    html: `
      <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f1f5f9;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #1f2937;
            line-height: 1.6;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #d1d5db;
          }
          .header {
            background-color: #2563eb;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            border-bottom: 4px solid #1d4ed8;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
          }
          .content {
            padding: 25px;
            font-size: 16px;
          }
          .content p {
            margin: 15px 0;
          }
          .content p strong {
            color: #2563eb;
          }
          .footer {
            background-color: #f3f4f6;
            padding: 15px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .footer a {
            color: #2563eb;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          @media (max-width: 600px) {
            .container {
              margin: 20px;
              border-radius: 6px;
            }
            .header h1 {
              font-size: 20px;
            }
            .content {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Message</h1>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="footer">
            <p>This email was sent from your website's contact form.</p>
          </div>
        </div>
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
