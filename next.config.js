/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // on exporte en site statique
  images: { unoptimized: true },
  basePath: isProd ? '/nom-du-repo' : '',
  assetPrefix: isProd ? '/nom-du-repo/' : ''
};

module.exports = nextConfig;
