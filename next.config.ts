/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio/' : '',
  images: {
    unoptimized: true, // چون next/image در حالت export پشتیبانی کامل ندارد
  },
};

export default nextConfig;
