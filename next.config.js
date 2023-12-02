/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['firebasestorage.googleapis.com', 'coinpayments.net','images.unsplash.com','plus.unsplash.com','media.istockphoto.com'],
      minimumCacheTTL: 1500000,
    },
    compiler: {
      removeConsole: false,
    },
    swcMinify: true
  }
  
module.exports = nextConfig