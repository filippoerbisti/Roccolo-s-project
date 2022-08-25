/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const withImages = require("next-images");
const withTM = require("next-transpile-modules");

// module.exports = withImages(withTM());

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
});

module.exports = withImages(withTM(nextConfig));

// Equal way, work
// module.exports = nextTranslate({
//   reactStrictMode: true,
// });