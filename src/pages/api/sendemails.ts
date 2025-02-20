import { NextApiRequest, NextApiResponse } from 'next';
import { MailService } from '@sendgrid/mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { to, subject, html } = req.body;

  if (!to || !subject || !html) {
    return res.status(400).json({ error: 'Missing required fields (to, subject, html)' });
  }

  const sgMail = new MailService();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  const msg = {
    to,
    from: process.env.EMAIL || 'info@zss.ca',
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email: ' + (error as Error).message });
  }
}