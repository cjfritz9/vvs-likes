require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [toRemotePattern(process.env.IG_CMS_IMAGE_PATTERN)]
  },
  domains: [
    {
      domain: 'vvslikes.com',
      defaultLocale: 'en-US'
    },
    {
      domain: 'vvs-staging.cjfritz.dev',
      defaultLocale: 'en-US'
    }
  ],
  redirects: async () => [
    {
      source: '/',
      has: [{ type: 'host', value: 'www.vvslikes.com' }],
      destination: 'https://vvslikes.com/en/buy-instagram-likes-free-trial',
      permanent: true
    },
    {
      source: '/',
      has: [{ type: 'host', value: 'vvslikes.com' }],
      destination: 'https://vvslikes.com/en/buy-instagram-likes-free-trial',
      permanent: true
    },
    {
      source: '/',
      has: [{ type: 'host', value: 'localhost:3000' }],
      destination: 'http://localhost:3000/en/buy-instagram-likes-free-trial',
      permanent: true
    },
    {
      source: '/',
      has: [{ type: 'host', value: 'vvs-staging.cjfritz.dev' }],
      destination:
        'https://vvs-staging.cjfritz.dev/en/buy-instagram-likes-free-trial',
      permanent: true
    },
    {
      source: '/',
      has: [{ type: 'host', value: 'vvslikes.com' }],
      destination: 'https://vvslikes.com/en/buy-instagram-likes-free-trial',
      permanent: true
    }
  ],
  output: 'standalone'
};

function toRemotePattern(urlString) {
  const url = new URL(urlString);

  return {
    protocol: url.protocol.replace(':', ''),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname
  };
}

module.exports = nextConfig;
