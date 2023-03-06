/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_IMAGE_DOMAIN_LOCALHOST || '',
      process.env.NEXT_PUBLIC_IMAGE_DOMAIN || '',
    ],
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
