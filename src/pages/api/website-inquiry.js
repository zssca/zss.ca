import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY); // Your SendGrid API key

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res
      .status(405)
      .json({ success: false, message: `Method ${req.method} not allowed.` });
  }

  const { name, email, businessName, budget } = req.body;

  // Validate input
  if (!name || !email || !businessName || !budget) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields.',
    });
  }

  const mailOptions = {
    to: process.env.EMAIL, // Ensure this is set correctly
    from: `no-reply@zss.ca`,
    replyTo: email, // Visitor's email address for replies
    subject: `Website Inquiry from ${name}`,
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
            <h1>Website Inquiry</h1>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Estimated Budget:</strong> ${budget}</p>
          </div>
          <div class="footer">
            <p>This email was sent from your website inquiry form.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    // Send email via SendGrid
    await sendgrid.send(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: 'Inquiry sent successfully.' });
  } catch (error) {
    console.error('Error sending inquiry email:', error.response?.body || error.message);
    return res
      .status(500)
      .json({ success: false, message: 'Failed to send inquiry.' });
  }
}
