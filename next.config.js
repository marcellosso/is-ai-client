/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      process.env.NEXT_IMAGE_DOMAIN_LOCALHOST,
      process.env.NEXT_IMAGE_DOMAIN,
    ],
  },
};

module.exports = nextConfig;
