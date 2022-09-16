/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "https://view.genial.ly/"],
  },
  swcMinify: true,
});

module.exports = nextConfig
