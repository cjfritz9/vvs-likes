export const config = {
  PORT: 3001,
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET,
  rapidAPI: {
    key: process.env.RAPID_API_KEY,
  },
  smmRaja: {
    api: process.env.SMMRAJA_API,
    key: process.env.SMMRAJA_KEY,
  },
  mailServer: {
    host: process.env.MAIL_SERVER_HOST,
    port: process.env.MAIL_SERVER_PORT,
    from: process.env.MAIL_SERVER_FROM,
    username: process.env.MAIL_SERVER_USERNAME,
    password: process.env.MAIL_SERVER_PASSWORD,
  },
  database: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    databasename: process.env.DATABASE_NAME,
  },
} as const;
