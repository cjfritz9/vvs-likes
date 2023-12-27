FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package*.json ./
RUN npm install
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG _NEXT_PUBLIC_API_URL
ARG _NEXT_PUBLIC_RECAPTCHA_KEY
ARG _IG_CMS_IMAGE_PATTERN
ARG _RECAPTCHA_SECRET
ARG _RAPID_API_KEY
ARG _SMMRAJA_API
ARG _SMMRAJA_KEY
ARG _MAIL_SERVICE
ARG _MAIL_SERVER_HOST
ARG _MAIL_SERVER_PORT
ARG _MAIL_SERVER_FROM
ARG _MAIL_SERVER_USERNAME
ARG _MAIL_SERVER_PASSWORD
ARG _MAILER_OAUTH_CLIENT_ID
ARG _MAILER_OAUTH_CLIENT_SECRET
ARG _MAILER_OAUTH_REFRESH_TOKEN
ARG _DATABASE_USERNAME
ARG _DATABASE_PASSWORD
ARG _DATABASE_HOST
ARG _DATABASE_PORT
ARG _DATABASE_NAME

ENV NEXT_PUBLIC_API_URL=${_NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_RECAPTCHA_KEY=${_NEXT_PUBLIC_RECAPTCHA_KEY}
ENV IG_CMS_IMAGE_PATTERN=${_IG_CMS_IMAGE_PATTERN}
ENV RECAPTCHA_SECRET=${_RECAPTCHA_SECRET}
ENV RAPID_API_KEY=${_RAPID_API_KEY}
ENV SMMRAJA_API=${_SMMRAJA_API}
ENV SMMRAJA_KEY=${_SMMRAJA_KEY}
ENV MAIL_SERVICE=${_MAIL_SERVICE}
ENV MAIL_SERVER_HOST=${_MAIL_SERVER_HOST}
ENV MAIL_SERVER_PORT=${_MAIL_SERVER_PORT}
ENV MAIL_SERVER_FROM=${_MAIL_SERVER_FROM}
ENV MAIL_SERVER_USERNAME=${_MAIL_SERVER_USERNAME}
ENV MAIL_SERVER_PASSWORD=${_MAIL_SERVER_PASSWORD}
ENV MAILER_OAUTH_CLIENT_ID=${_MAILER_OAUTH_CLIENT_ID}
ENV MAILER_OAUTH_CLIENT_SECRET=${_MAILER_OAUTH_CLIENT_SECRET}
ENV MAILER_OAUTH_REFRESH_TOKEN=${_MAILER_OAUTH_REFRESH_TOKEN}
ENV DATABASE_USERNAME=${_DATABASE_USERNAME}
ENV DATABASE_PASSWORD=${_DATABASE_PASSWORD}
ENV DATABASE_HOST=${_DATABASE_HOST}
ENV DATABASE_PORT=${_DATABASE_PORT}
ENV DATABASE_NAME=${_DATABASE_NAME}

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
