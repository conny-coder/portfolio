/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With',
          },
        ],
      },
    ]
  },
  reactStrictMode: true,
  images: { domains: ['localhost'] },
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
  },
}

module.exports = nextConfig
