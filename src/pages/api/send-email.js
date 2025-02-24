import sgMail from "@sendgrid/mail";

// Set the SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const msg = {
    to: process.env.EMAIL, // e.g., "info@zss.ca"
    from: "info@zss.ca", // Replace with your verified SendGrid sender email
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            overflow: hidden;
          }
          .header {
            background-color: #d3d3d3;
            padding: 20px;
            text-align: center;
            border-bottom: 1px solid #e0e0e0;
          }
          .header h1 {
            margin: 0;
            font-size: 20px;
            color: #555555;
          }
          .content {
            padding: 30px;
          }
          .content p {
            margin: 10px 0;
            font-size: 14px;
            line-height: 1.5;
            color: #666666;
          }
          .content strong {
            color: #444444;
          }
          .footer {
            background-color: #f0f0f0;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #888888;
            border-top: 1px solid #e0e0e0;
          }
          a {
            color: #777777;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <div class="footer">
            <p>Sent from <a href="mailto:info@zss.ca">info@zss.ca</a> | ZSS Contact Form</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("SendGrid error:", error);
    if (error.response) {
      console.error("SendGrid response:", error.response.body);
    }
    return res.status(500).json({ message: "Failed to send email" });
  }
}