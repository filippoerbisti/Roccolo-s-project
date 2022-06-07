/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);

// module.exports = withImages(withTM());

const nextConfig = nextTranslate({
  reactStrictMode: true,
});

module.exports = withImages(withTM(nextConfig));

// Equal way, work
// module.exports = nextTranslate({
//   reactStrictMode: true,
// });