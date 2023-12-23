const nodemailer = require('nodemailer');
import { config } from '../config';
import { Logger } from '.';

const logger = Logger.getLogger();

interface IMailOptions {
  to: string;
  subject: string;
  html: string;
}

export const MailService = {
  sendEmail({ to, subject, html }: IMailOptions) {
    const smtpTransport = nodemailer.createTransport({
      host: config.mailServer.host,
      port: config.mailServer.port,
      secure: false,
      auth: {
        user: config.mailServer.username,
        pass: config.mailServer.password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: config.mailServer.from,
      to,
      subject,
      html
    };
    try {
      smtpTransport.sendMail(mailOptions);
    } catch (error) {
      logger.error({
        message: 'sendmail() error',
        error
      });
      throw error;
    }
  }
};
