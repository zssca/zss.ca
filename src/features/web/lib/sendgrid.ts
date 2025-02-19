// src/lib/sendgrid.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export const sendEmail = async (to: string, subject: string, html: string) => {
  const msg = {
    to,
    from: process.env.EMAIL || 'info@zss.ca', // Use your configured email
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};