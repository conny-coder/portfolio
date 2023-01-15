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
<<<<<<< HEAD
            value: 'GET,POST',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'Origin, X-Requested-With, Content-Type, Accept, Authorization',
=======
            value: 'GET',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
>>>>>>> 53cb53e1bda7724837a24921b86b8a9892578b9d
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
