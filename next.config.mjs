/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techzenondev.com',
        port: '',
        pathname: '/apnatai/public/images/**',
      },
      {
        protocol: 'https',
        hostname: 'techzenondev.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
