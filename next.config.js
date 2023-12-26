require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [toRemotePattern(process.env.IG_CMS_IMAGE_PATTERN)]
  },
  redirects: async () => [
    {
      source: '/',
      has: [{ type: 'host', value: 'www.vvslikes.com' }],
      destination: 'https://vvslikes.com/',
      permanent: true
    }
  ],
  output: 'standalone'
};

function toRemotePattern(urlString) {
  console.log({ urlString });
  const url = new URL(urlString);

  return {
    protocol: url.protocol.replace(':', ''),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname
  };
}

module.exports = nextConfig;
