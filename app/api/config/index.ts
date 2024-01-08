export const config = {
  PORT: 3001,
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET!,
  rapidAPI: {
    key: process.env.RAPID_API_KEY!,
  },
  maxMind: {
    accountId: process.env.NEXT_PUBLIC_MAXMIND_ACCOUNT_ID!,
    licenseKey: process.env.MAXMIND_LICENSE_KEY!
  },
  smmRaja: {
    api: process.env.SMMRAJA_API!,
    key: process.env.SMMRAJA_KEY!,
  },
  mailServer: {
    service: process.env.MAIL_SERVICE!,
    host: process.env.MAIL_SERVER_HOST!,
    port: process.env.MAIL_SERVER_PORT!,
    from: process.env.MAIL_SERVER_FROM!,
    username: process.env.MAIL_SERVER_USERNAME!,
    password: process.env.MAIL_SERVER_PASSWORD!,
    oAuthClientId: process.env.MAILER_OAUTH_CLIENT_ID!,
    oAuthClientSecret: process.env.MAILER_OAUTH_CLIENT_SECRET!,
    oAuthRefreshToken: process.env.MAILER_OAUTH_REFRESH_TOKEN!,
  },
  database: {
    username: process.env.DATABASE_USERNAME!,
    password: process.env.DATABASE_PASSWORD!,
    host: process.env.DATABASE_HOST!,
    port: process.env.DATABASE_PORT!,
    databasename: process.env.DATABASE_NAME!,
  },
} as const;
