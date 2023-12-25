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
      service: config.mailServer.service,
      // host: config.mailServer.host,
      // port: config.mailServer.port,
      // secure: false,
      auth: {
        type: 'OAuth2',
        user: config.mailServer.username,
        pass: config.mailServer.password,
        clientId: config.mailServer.oAuthClientId,
        clientSecret: config.mailServer.oAuthClientSecret,
        refreshToken: config.mailServer.oAuthRefreshToken
      },
      // tls: {
      //   rejectUnauthorized: false
      // }
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
