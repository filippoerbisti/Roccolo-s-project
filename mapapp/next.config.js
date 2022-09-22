/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');
// const withPWA = require("next-pwa");

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // sw: 'service-worker.js',
})

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "https://view.genial.ly/"],
  },
  swcMinify: true,
});

module.exports = withPWA(nextConfig)
