/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '187.77.255.251',
        port: '8080',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
