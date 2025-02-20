import { MailService } from '@sendgrid/mail';

let sgMail: MailService | null = null;

const initSendGrid = async () => {
  if (!sgMail) {
    const mail = await import('@sendgrid/mail');
    sgMail = mail.default;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
    if (!process.env.SENDGRID_API_KEY) {
      console.warn('SENDGRID_API_KEY not set, emails will fail');
    }
  }
  return sgMail;
};

export const sendEmail = async (to: string, subject: string, html: string) => {
  const sgMail = await initSendGrid();
  if (!sgMail) {
    throw new Error('SendGrid not initialized');
  }

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
    throw new Error('Failed to send email: ' + (error as Error).message);
  }
};