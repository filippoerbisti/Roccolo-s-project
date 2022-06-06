/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const nextConfig = nextTranslate({
  reactStrictMode: true,
});

module.exports = nextConfig

// Equal way, work
// module.exports = nextTranslate({
//   reactStrictMode: true,
// });