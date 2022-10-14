/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'is-ai-server.herokuapp.com'],
  },
};

module.exports = nextConfig;
