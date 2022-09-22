/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');
const withPWA = require("next-pwa");

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "https://view.genial.ly/"],
  },
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = withPWA(nextConfig)
