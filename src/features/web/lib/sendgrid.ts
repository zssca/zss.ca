// src/features/web/lib/sendgrid.ts (or use src/pages/api/send-email.ts)
import { MailService } from '@sendgrid/mail';

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (options: EmailOptions) => {
  const sgMail = new MailService();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY not configured');
  }

  const msg = {
    to: options.to,
    from: process.env.EMAIL || 'info@zss.ca',
    subject: options.subject,
    html: options.html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email: ' + (error as Error).message);
  }
};