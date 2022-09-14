/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "https://view.genial.ly/"],
  },
  swcMinify: true,
}

module.exports = nextConfig
