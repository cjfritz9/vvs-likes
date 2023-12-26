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
  async sendEmail({ to, subject, html }: IMailOptions) {
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
      }
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
      const response: any = await new Promise((resolve, reject) => {
        smtpTransport.sendMail(mailOptions, (err: any, info: any) => {
          console.log('In mail sending function')
          if (err) {
            console.log(err);
            console.log(info);
            logger.error({
              message: 'sendmail() error',
              error: err
            });
            reject(err);
          } else {
            resolve(info);
          }
        });
      });
      console.log({ response: await response });
    } catch (error) {
      logger.error({
        message: 'sendmail() error',
        error
      });
      throw error;
    }
  }
};
