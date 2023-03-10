/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  crossOrigin: 'anonymous',
  images: {
    domains: [
      process.env.NEXT_PUBLIC_IMAGE_DOMAIN_LOCALHOST || '',
      process.env.NEXT_PUBLIC_IMAGE_DOMAIN || '',
    ],
    minimumCacheTTL: 31536000,
  },
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: `www.${NEXT_PUBLIC_SITE_URL}` }],
      destination: `https://${NEXT_PUBLIC_SITE_URL}/:path*`,
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
