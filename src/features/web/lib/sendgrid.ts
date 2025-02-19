// src/lib/sendgrid.ts

import { MailService } from '@sendgrid/mail';

let sgMail: MailService | null = null;

const initSendGrid = async () => {
  if (!sgMail) {
    const mail = await import('@sendgrid/mail');
    sgMail = mail.default;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
  }
  return sgMail;
};

export const sendEmail = async (to: string, subject: string, html: string) => {
  const sgMail = await initSendGrid();
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