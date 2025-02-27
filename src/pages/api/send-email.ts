import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

// Set SendGrid API key from environment variable
sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

// Define response data type
interface ResponseData {
  success: boolean;
  message: string;
}

// Define a custom error type for SendGrid errors
interface SendGridError extends Error {
  response?: {
    body: unknown; // Changed from 'any' to 'unknown' for stricter typing
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed.`,
    });
  }

  const { name, email, phone, message } = req.body as {
    name: string;
    email: string;
    phone?: string;
    message: string;
  };

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide name, email, and message.',
    });
  }

  // Debugging logs for environment variables
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
    from: 'info@zss.ca', // Verified SendGrid sender
    replyTo: email, // Visitor's email for replies
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9; }
            .header { background-color: #007bff; color: white; padding: 15px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { padding: 20px; background-color: white; border-radius: 0 0 8px 8px; }
            h1 { margin: 0; font-size: 24px; }
            h2 { font-size: 18px; color: #007bff; margin-bottom: 10px; }
            p { margin: 5px 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { word-wrap: break-word; }
            a { color: #007bff; text-decoration: none; }
            a:hover { text-decoration: underline; }
            .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <p class="label">Name:</p>
                <p class="value">${name}</p>
              </div>
              <div class="field">
                <p class="label">Email:</p>
                <p class="value"><a href="mailto:${email}">${email}</a></p>
              </div>
              ${
                phone
                  ? `
              <div class="field">
                <p class="label">Phone:</p>
                <p class="value">${phone}</p>
              </div>`
                  : ''
              }
              <div class="field">
                <p class="label">Message:</p>
                <p class="value">${message}</p>
              </div>
            </div>
            <div class="footer">
              <p>Received on ${new Date().toLocaleString()}</p>
              <p>Sent via ZSS Contact Form</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    // Send email using SendGrid
    await sendgrid.send(mailOptions);
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully.',
    });
  } catch (error: unknown) {
    // Type guard to check if error matches SendGridError structure
    const errorMessage = error instanceof Error 
      ? (error as SendGridError).response?.body ?? error.message 
      : 'Unknown error occurred';

    console.error('Error sending email:', errorMessage);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    });
  }
}