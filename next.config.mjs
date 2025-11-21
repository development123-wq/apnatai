/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techzenondev.com',
        port: '',
        pathname: '/apnatai/public/images/**', // ✅ covers URLs with /public/
      },
      {
        protocol: 'https',
        hostname: 'techzenondev.com',
        port: '',
        pathname: '/apnatai/images/**',
      },
    ],
  },
};

export default nextConfig;
