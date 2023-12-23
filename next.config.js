/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/',
      has: [{ type: 'host', value: 'www.vvslikes.com' }],
      destination: 'https://vvslikes.com/',
      permanent: true
    }
  ]
}

module.exports = nextConfig
