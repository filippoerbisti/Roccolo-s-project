/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  swcMinify: true,
});

module.exports = nextConfig
